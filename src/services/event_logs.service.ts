import { models } from '../config/sequelize';

export class EventLogService {

    async findByEvent(id: number) {
        try {
            const logs = await models.EventLogs.findAll({
                where: {
                    logs_id_evento: id
                }
            });
            return logs;
        } catch (error) {
            throw new Error(`Unable to find logs for event with ID ${id}`);
        }
    }

    async create(data: any) {
        return await models.EventLogs.create(data);
    }
}