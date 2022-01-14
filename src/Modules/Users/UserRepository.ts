import { User } from "../../entities/User";
import BaseRepository from "../../Utils/BaseRepository";
import { IUserRepository } from "./structure";

export default class UserRepository extends BaseRepository<User> implements IUserRepository {
    
}