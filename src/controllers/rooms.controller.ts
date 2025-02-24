import { Request, Response } from "express";
import { RoomService } from "../services/rooms.service";

const service = new RoomService();

export class RoomController {
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
            const room = await service.findById(Number(id));

            if (!room) {
                return res.status(404).json({ message: "Room not found" });
            }

            return res.json({ success: true, data: room });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: "Internal Server Error", error: error.message });
            }
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    static async create(req: Request, res: Response): Promise<Response> {
        try {
            const newRoom = await service.create(req.body);
            return res.status(201).json({ success: true, data: newRoom });
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
            const updatedRoom = await service.update(Number(id), req.body);
            return res.json(updatedRoom);
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
            return res.json({ message: "Room deleted successfully" });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: "Internal Server Error", error: error.message });
            }
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}