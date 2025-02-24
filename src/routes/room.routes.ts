import express from 'express';
import { RoomController } from '../controllers/rooms.controller';

const router = express.Router();

router
    .get("/", RoomController.get)
    .get("/:id", RoomController.getById)
    .post("/", RoomController.create)
    .put("/:id", RoomController.update)
    .delete("/:id", RoomController._delete);

export default router;