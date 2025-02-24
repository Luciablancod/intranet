import express from 'express';
import { EventController } from '../controllers/events.controller';

const router = express.Router();

router
    .get("/", EventController.get)
    .get("/:id", EventController.getById)
    .post("/", EventController.create)
    .put("/:id", EventController.update)
    .delete("/:id", EventController._delete);

export default router;