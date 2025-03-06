import express from "express";
import { AuthController } from "../controllers/auth.controller";

const router= express.Router();

router
    .post("/login", AuthController.login)
    .post("/logout",AuthController.logout )
    .post("/register", AuthController.register)

export default router;