import { Request, Response } from "express";
import { EventService } from "../services/events.service";

const service = new EventService();

export class EventController{
        static async get(req: Request, res: Response): Promise<Response> {
            try {
                const response = await service.findAll();
                return res.json({ success: true, data: response });
            } catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: "Internal Server Error", error: error.message });
                }
                return res.status(500).json({ message: "Internal Server Error" });
            }
        }
    
        static async getById(req: Request, res: Response): Promise<Response> {
            try {
                const { id } = req.params;
                const event = await service.findById(Number(id));
    
                if (!event) {
                    return res.status(404).json({ message: "Event not found" });
                }
    
                return res.json({ success: true, data: event });
            } catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: "Internal Server Error", error: error.message });
                }
                return res.status(500).json({ message: "Internal Server Error" });
            }
        }
    
        static async create(req: Request, res: Response): Promise<Response> {
            try {
                const newevent = await service.create(req.body);
                return res.status(201).json({ success: true, data: newevent });
            } catch (error) {
                if (error instanceof Error) {
                    return res.status(400).json({ message: "Bad request", error: error.message });
                }
                return res.status(400).json({ message: "Bad request" });
            }
        }
    
        static async update(req: Request, res: Response): Promise<Response> {
            try {
                const { id } = req.params;
                const updatedevent = await service.update(Number(id), req.body);
                return res.json(updatedevent);
            } catch (error) {
                if (error instanceof Error) {
                    return res.status(400).json({ message: "Bad request", error: error.message });
                }
                return res.status(400).json({ message: "Bad request" });
            }
        }
    
        static async _delete(req: Request, res: Response): Promise<Response> {
            try {
                const { id } = req.params;
                await service.delete(Number(id));
                return res.json({ message: "Event deleted successfully" });
            } catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: "Internal Server Error", error: error.message });
                }
                return res.status(500).json({ message: "Internal Server Error" });
            }
        }
}