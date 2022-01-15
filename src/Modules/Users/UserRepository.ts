import { Repository } from "typeorm";
import { User } from "../../entities/User";
import BaseRepository from "../../Utils/BaseRepository";
import { IUser, IUserRepository } from "./structure";

export default class UserRepository extends BaseRepository<User> implements IUserRepository {

    getRepo(): Repository<User> {
        return super._getRepo(User)
      }

      async create(data: IUser): Promise<User | Error> {
        
        const { name, CPF, email, phone } = data 

        const user = await this.getRepo().create({
          name,
          CPF,
          email,
          phone
        })

        await this.getRepo().save(user)

        return user

      };

      async find(): Promise<object> {
          return await this.getRepo().find()
      }
}

