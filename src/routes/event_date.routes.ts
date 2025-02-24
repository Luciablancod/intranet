import express from 'express';
import { EventDateController } from '../controllers/event_date.controller';

const router = express.Router();

router
    .get("/", EventDateController.get)
    .get("/:id", EventDateController.getById)
    .post("/", EventDateController.create)
    .put("/:id", EventDateController.update)
    .delete("/:id", EventDateController._delete);

export default router;