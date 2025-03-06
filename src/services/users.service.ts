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

    async findByUsername(value: string) {
        try {
            if(!value ) return null;
            const user = await models.User.findOne({
                where: { login_usuario: value.trim() } 
            });
    
            if (!user) {
                console.warn(`User not found for username: ${value}`);
            }
    
            return user;

        } catch (error) {
            console.error(`Error finding user:`, error);
            throw new Error("Database query failed");
        }
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
        if(user.login_contrasenia.length === 32){ //si es una contraseña hasheada con md5
          if(md5(text) === user.login_contrasenia){ //y coincide con la contraseña de la db
            const hashedPass = await bcrypt.hash(text, 10); //entonces hashea con bcrypt
            await user.update({login_contrasenia: hashedPass}); //la guarda en db

            console.log(`Password for ${user.login_usuario} has been rehashed to bcrypt.`);
            return true;
          }
          return false;
        }
        return await bcrypt.compare(text, user.login_contrasenia); //si no es md5 compara con bcrypt
    }
}
