import { Request, Response } from "express";
import { EventLogService } from "../services/event_logs.service";

const service = new EventLogService();

export class EventLogController {
    static async getByEvent(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            const response = await service.findByEvent(Number(id));
            return res.json({ success: true, data: response });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: "Internal Server Error", error: error.message });
            }
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    static async create(req: Request, res: Response): Promise<Response> {
        try {
            const newEventDate = await service.create(req.body);
            return res.status(201).json({ success: true, data: newEventDate });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: "Bad request", error: error.message });
            }
            return res.status(400).json({ message: "Bad request" });
        }
    }
}