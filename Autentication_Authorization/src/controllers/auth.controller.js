 import User from "../models/user.model.js";
import crypto from "crypto";
import config from "../config/config.js";
import jwt from "jsonwebtoken";

 export async function register(req, res) {
    const { username, email, password } = req.body;
    console.log(req.body);
    const isAlreadyRegisered = await User.findOne({$or :[{username},{email}]});
    if(isAlreadyRegisered){
        return res.status(409).json({message: "User already registered"});
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const newUser= User.create({
        username,
        email,
        password: hashedPassword
    });

    const Token=jwt.sign({userId: newUser._id}, config.JWT_SECRET, {expiresIn: "1h"});
    res.status(201).json({message: "User registered successfully", token: Token});
    
} 