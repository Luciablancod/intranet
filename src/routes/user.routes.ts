import express from 'express';
import { UserController } from '../controllers/users.controller';

const router = express.Router();

router
    .get("/", UserController.get)
    .get("/:id", UserController.getById)
    .post("/signin", UserController.create)
    .put("/:id", UserController.update)
    .delete("/:id", UserController._delete);

export default router;