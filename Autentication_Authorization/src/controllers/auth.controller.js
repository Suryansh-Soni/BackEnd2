import User from "../models/user.model.js";
import crypto from "crypto";
import config from "../config/config.js";
import jwt from "jsonwebtoken";
import sessionModel from "../models/session.model.js";


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

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  //   const Token = jwt.sign({ userId: newUser._id }, config.JWT_SECRET, {
  //     expiresIn: "1h",
  //   });

  const refreshToken = jwt.sign({ userId: newUser._id }, config.JWT_SECRET, {
    expiresIn: "7d",
  });

const refreshTokenHash=crypto.createHash("sha256").update(refreshToken).digest("hex");
  
const session = await sessionModel.create({
  user:newUser._id,
  refreshTokenHash,
  ip:req.ip,
  userAgent:req.get("user-agent")
})
  const accessToken = jwt.sign({ userId: newUser._id,sessionId:session._id }, config.JWT_SECRET, {
    expiresIn: "15m",
  });

  


  

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

 res.status(201).json({
  message: "User registered successfully",
  accessToken,
  sessionId: session._id,
  user: {
    id: newUser._id,
    username: newUser.username,
    email: newUser.email,
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
  
  const newRefreshToken = jwt.sign(
    { userId: decoded.userId },
    config.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  const accessToken = jwt.sign({ userId: decoded.userId }, config.JWT_SECRET, {
    expiresIn: "15m",
  });


  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  res.status(200).json({ accessToken });
}
