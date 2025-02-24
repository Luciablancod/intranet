import express from 'express';
import { EventLogController } from '../controllers/event_logs.controller';

const router = express.Router();

router
    .get("/:id", EventLogController.getByEvent)
    .post("/", EventLogController.create);

export default router;