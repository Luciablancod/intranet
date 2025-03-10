import { Request, Response } from "express";
import { UserService } from "../services/users.service";
import md5 from "md5";
import bcrypt from "bcrypt";

const userService = new UserService();

export class UserController {
  static async get(req: Request, res: Response) {
    try {
      const users = await userService.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: (error as Error).message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await userService.findById(Number(id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: (error as Error).message });
    }
  }

  static async create(req: Request, res: Response) {
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

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedUser = await userService.update(Number(id), req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: (error as Error).message });
    }
  }

  static async _delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await userService.delete(Number(id));
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: (error as Error).message });
    }
  }

  static async changePassword(req: Request, res: Response){
    try{

    }catch (error){
      
    }
  }

}
