import { models } from '../config/sequelize';
import md5 from "md5";
import bcrypt from "bcrypt";

export class UserService {
    async findAll() {
        return await models.User.findAll();
    }

    async findById(id: number) {
        return await models.User.findByPk(id);
    }

    async findBy(field: string, value: any) {
        return await models.User.findOne({ where: { [field]: value } });
    }
    
    async create(data: any) {
        return await models.User.create(data);
    }

    async update(id: number, data: any) {
        const user = await this.findById(id);
        if (!user) throw new Error("User not found");
        return await models.User.update(data, { where: { login_id: id }});
    }

    async delete(id: number) {
        const room = await this.findById(id);
        if (!room) throw new Error("User not found");
        await models.User.destroy({where: { login_id: id } });
        return { message: "User deleted successfully" };
    }

    async validatePassword(text: string, user: any): Promise<boolean>{
        if(user.login_contrasenia.length === 32){
          if(md5(text) === user.login_contrasenia){
            const hashedPass = await bcrypt.hash(text, 10);
            await user.update({login_contrasenia: hashedPass});

            console.log(`Password for ${user.login_usuario} has been rehashed to bcrypt.`);
            return true;
          }
          return false;
        }
        return await bcrypt.compare(text, user.login_contrasenia);
    }
}
