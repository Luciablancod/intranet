import { models } from '../config/sequelize';

export class EventDateService {
    async findAll() {
        return await models.EventDate.findAll();
    }

    async findById(id: number) {
        return await models.EventDate.findByPk(id);
    }

    async create(data: any) {
        return await models.EventDate.create(data);
    }

    async update(id: number, data: any) {
        const eventDate = await this.findById(id);
        if (!eventDate) throw new Error("Event date not found");
        return await models.EventDate.update(data, { where: { cruces_id: id }});
    }

    async delete(id: number) {
        const eventDate = await this.findById(id);
        if (!eventDate) throw new Error("Event date not found");
        await models.EventDate.destroy({where: { cruces_id: id } });
        return { message: "Event date deleted successfully" };
    }
}
