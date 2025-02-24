import { models } from '../config/sequelize';

export class RoomService {
    async findAll() {
        return await models.Room.findAll();
    }

    async findById(id: number) {
        return await models.Room.findByPk(id);
    }

    async create(data: any) {
        return await models.Room.create(data);
    }

    async update(id: number, data: any) {
        const room = await this.findById(id);
        if (!room) throw new Error("Room not found");
        return await models.Room.update(data, { where: { lugares_id: id }});
    }

    async delete(id: number) {
        const room = await this.findById(id);
        if (!room) throw new Error("Room not found");
        await models.Room.destroy({where: { lugares_id: id } });
        return { message: "Room deleted successfully" };
    }
}
