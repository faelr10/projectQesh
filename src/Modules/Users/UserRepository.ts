import { Repository } from "typeorm";
import { User } from "../../entities/User";
import BaseRepository from "../../Utils/BaseRepository";
import { IUser, IUserRepository } from "./structure";

export default class UserRepository extends BaseRepository<User> implements IUserRepository {

    getRepo(): Repository<User> {
        return super._getRepo(User)
      }

      async create(data: IUser): Promise<User | Error> {
          
      }
}

