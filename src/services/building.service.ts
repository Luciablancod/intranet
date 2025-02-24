import {models} from '../config/sequelize';

export class BuildingService {
    async findAll(){
        return await models.Building.findAll();
    }

    async findById(id: number){
        return await models.Building.findByPk(id);
    }

    async create(data:any){
        return await models.Building.create(data);
    }

    async update(id: number, data:any){
        const building = await this.findById(id);
        if(!building) throw new Error("Building not found");
        return await models.Building.update(data, {where: {edificios_id : id}});
    }

    async delete(id:number){
        const building= await this.findById(id);
        
    }
}

