import { Request, Response } from "express";
import { UserService } from "../services/users.service";
import jwt from "jsonwebtoken";

const userService = new UserService();

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await userService.findBy('login_usuario',username);

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const isPasswordValid = await userService.validatePassword(password, user);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user.login_id, username: user.login_usuario }, "your_secret_key", {
        expiresIn: "1h",
      });

      res.json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: (error as Error).message });
    }
  }
}
