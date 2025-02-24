import { models } from '../config/sequelize';

export class EventService {
    async findAll() {
        return await models.Event.findAll();
    }

    async findById(id: number) {
        return await models.Event.findByPk(id);
    }

    async create(data: any) {
        return await models.Event.create(data);
    }

    async update(id: number, data: any) {
        const event = await this.findById(id);
        if (!event) throw new Error("Event not found");
        return await models.Event.update(data, { where: { eventos_id: id } });
    }

    async delete(id: number) {
        const event = await this.findById(id);
        if (!event) throw new Error("Event not found");
        return await models.Event.destroy({ where: { eventos_id: id } });
    }
}
