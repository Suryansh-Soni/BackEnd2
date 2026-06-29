import User from "../models/user.model.js";
import crypto, { hash } from "crypto";
import config from "../config/config.js";
import jwt from "jsonwebtoken";
import sessionModel from "../models/session.model.js";
import { sendEmail } from "../services/email.service.js";
import { generateOtp, getOtpHtml } from "../utils/util.js";
import otpModel from "../models/otp.model.js";

export async function register(req, res) {
  const { username, email, password } = req.body;
  console.log(req.body);
  const isAlreadyRegisered = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (isAlreadyRegisered) {
    return res.status(409).json({ message: "User already registered" });
  }

  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  const otp = generateOtp();
  const html = getOtpHtml(otp);
  const otpHash = crypto.createHash("sha256").update(otp).digest("hex");
  await otpModel.create({
    email,
    user: user._id,
    otpHash,
  });
  await sendEmail(email, "otp verification", `YourOtp code is ${otp}`, html);
  //   const Token = jwt.sign({ userId: newUser._id }, config.JWT_SECRET, {
  //     expiresIn: "1h",
  //   });

  // const refreshToken = jwt.sign({ userId: newUser._id }, config.JWT_SECRET, {
  //   expiresIn: "7d",
  // });

  // const refreshTokenHash = crypto
  //   .createHash("sha256")
  //   .update(refreshToken)
  //   .digest("hex");

  // const session = await sessionModel.create({
  //   user: newUser._id,
  //   refreshTokenHash,
  //   ip: req.ip,
  //   userAgent: req.get("user-agent"),
  // });
  // const accessToken = jwt.sign(
  //   { userId: newUser._id, sessionId: session._id },
  //   config.JWT_SECRET,
  //   {
  //     expiresIn: "15m",
  //   },
  // );

  // res.cookie("refreshToken", refreshToken, {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: "strict",
  //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  // });

  res.status(201).json({
    message: "User registered successfully. OTP sent to email.",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      verified: user.verified,
    },
  });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "No such user" });
  }

  if (!user.verified) {
    return res.status(401).json({ message: "email not verified." });
  }

  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const isPasswordValid = hashPassword === user.password;

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const refreshToken = jwt.sign({ userId: user._id }, config.JWT_SECRET, {
    expiresIn: "7d",
  });

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const session = await sessionModel.create({
    user: user._id,
    refreshTokenHash,
    ip: req.ip || "Unknown",
    userAgent: req.get("user-agent") || "Unknown",
  });

  const accessToken = jwt.sign(
    { userId: user._id, sessionId: session._id },
    config.JWT_SECRET,
    { expiresIn: "15m" },
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    message: "Login successful",
    accessToken,
    sessionId: session._id,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

export async function getMe(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(req.headers);
  if (!token) {
    return res.status(401).json({ message: "token not found." });
  }
  const decoded = jwt.verify(token, config.JWT_SECRET);

  const user = await User.findById(decoded.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({
    message: "user fetched successfully",
    user: { username: user.username, email: user.email },
  });
}

export async function refreshToken(req, res) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token not found." });
  }
  const decoded = jwt.verify(refreshToken, config.JWT_SECRET);

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const session = await sessionModel.findOne({
    refreshTokenHash,
    revoked: false,
  });

  if (!session) {
    return res.status(401).json({ message: "invalid ref token" });
  }

  const accessToken = jwt.sign({ userId: decoded.userId }, config.JWT_SECRET, {
    expiresIn: "15m",
  });

  const newRefreshToken = jwt.sign(
    { userId: decoded.userId },
    config.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  const newRefreshTokenHash = crypto
    .createHash("sha256")
    .update(newRefreshToken)
    .digest("hex");

  session.refreshTokenHash = newRefreshTokenHash;
  await session.save();

  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  res.status(200).json({ accessToken });
}

export async function logout(req, res) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token not found" });
  }

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const session = await sessionModel.findOne({
    refreshTokenHash,
    revoked: false,
  });

  if (!session) {
    return res.status(400).json({ message: "Invalid refresh token" });
  }

  session.revoked = true;
  await session.save();

  res.clearCookie("refreshToken");

  res.status(200).json({ message: "Logout successful" });
}

export async function logoutAll(req, res) {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(400).json({
      message: "Refresh token not found",
    });
  }
  const decoded = jwt.verify(refreshToken, config.JWT_SECRET);
  await sessionModel.updateMany(
    {
      user: decoded.id,
      revoked: false,
    },
    {
      revoked: true,
    },
  );
  res.clearCookie("refreshToken");
  res.status(200).json({
    message: "Logged out successfully from all devices",
  });
}

export async function verifyEmail(req, res) {
  const { otp, email } = req.body;

  const otpHash = crypto.createHash("sha256").update(otp).digest("hex");

  const otpDoc = await otpModel.findOne({
    email,
    otpHash,
  });

  if (!otpDoc) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  const user = await User.findByIdAndUpdate(
    otpDoc.user,
    { verified: true },
    { new: true },
  );

  await otpModel.deleteMany({
    user: otpDoc.user,
  });

  return res.status(200).json({
    message: "Email verified successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      verified: user.verified,
    },
  });
}
