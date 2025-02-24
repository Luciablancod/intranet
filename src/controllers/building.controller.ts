import {Request, Response} from "express";
import { BuildingService } from "../services/building.service";
import { error } from "console";

const service = new BuildingService();

export class BuildingController{
    static async get(req: Request, res:Response): Promise<Response>{
        try{
            const response = await service.findAll();
            return res.json({success:true, data:response});
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: "Internal Server Error", error: error.message});
            }
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    static async getById(req: Request, res: Response): Promise<Response>{
        try{
            const {id}= req.params;
            const building = await service.findById(Number(id));

            if(!building){
                return res.status(404).json({message: "Building not found" })
            }
        
            return res.json({success:true, data: building})
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message:"Internal Server Error", error: error.message})
            }

            return res.status(500).json({message: "Internal Server Error"})
        }
    }

    static async create(req:Request, res:Response): Promise<Response>{
        try{
            const newBuilding = await service.create(req.body);
            return res.status(201).json({success: true, data: newBuilding});

        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({message:"Bad request", error: error.message});
            }
            return res.status(400).json({message:"Bad request"});
        }
    }

    static async update(req:Request, res:Response): Promise<Response>{
        try{
            const {id} = req.params;
            const updatedBuilding= await service.update(Number(id), req.body);
            return res.json(updatedBuilding);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({message:"Bad request", error: error.message});
            }
            return res.status(400).json({message:"Bad request"});
        }
    }

    static async _delete(req:Request, res: Response): Promise<Response>{
        try{
            const {id}= req.params;
            await service.delete(Number(id));
            return res.json({message:"Building deleted successfully"});
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message:"Internal Server Error", error: error.message})
            }
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
}

