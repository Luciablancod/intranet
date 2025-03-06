import { Request, Response } from "express";
import { UserService } from "../services/users.service";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "../config";
import cookieParser from 'cookie-parser'

const SECRET_JWT_KEY = config.SECRET_JWT_KEY;

const userService = new UserService();
export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { login_usuario, login_contrasenia } = req.body;

      const user = await userService.findByUsername(login_usuario);

      if (!user) {
        return res.status(401).json({ message: "Invalid user" });
      }

      const isPasswordValid = await userService.validatePassword(login_contrasenia, user);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user.login_id, username: user.login_usuario }, SECRET_JWT_KEY, {
        expiresIn: "1h",
      });

      res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV == 'production',
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60
        })
      .json({ message: "Login successful" });

      
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: (error as Error).message });
    }
  }


  static async register(req: Request, res: Response) {
    try {
      const { login_usuario, login_contrasenia } = req.body;
  
      const existingUser = await userService.findByUsername(login_usuario);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(login_contrasenia, 10);
  
      const newUser = await userService.create({
        login_usuario,
        login_contrasenia: hashedPassword,
      });
  
      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: (error as Error).message });
    }
  }

  static async logout(req: Request, res: Response) {
    res.json({ message: "Logged out successfully" });
  }
  
}
