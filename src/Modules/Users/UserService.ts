import { User } from "../../entities/User";
import { IUser, IUserRepository, IUserService } from "./structure";

export default class UserService implements IUserService {

    constructor (
        private userRepository: IUserRepository
    ){}

    async create(data: IUser): Promise<Error | User> {
        
    }
}