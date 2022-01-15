import { User } from "../../entities/User";
import { IUser, IUserRepository, IUserService } from "./structure";

export default class UserService implements IUserService {

    constructor (
        private userRepository: IUserRepository
    ){}

    async create(data: IUser): Promise<Error | User> {

        const { name, CPF, email, phone } = data
        
        const user = await this.userRepository.create({
            name,
            CPF,
            email,
            phone
        })

        return user;
    };

    async find(): Promise<object> {
        const find = await this.userRepository.find()
        return find
    };

    async findById(id: string): Promise<object>{
        const findId = await this.userRepository.findById(id)
        return findId
    }

    async delete(id: string ):Promise<void> {

         await this.userRepository.delete(id)

    }
}