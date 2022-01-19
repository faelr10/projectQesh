import { ObjectID } from "typeorm";
import { Account } from "../../entities/Account";
import { IAccount, IAccountRepository, IAccountService } from "./structure";

export default class AccounService implements IAccountService {

    constructor (
        private accountRepository: IAccountRepository
    ){}

    async create(data: IAccount): Promise<object | Error> {

        const { id, typeAccount, balance, id_idUser} = data

        const account = this.accountRepository.create({
            id, 
            typeAccount,
            balance,
            id_idUser
        });

        return account;
    };

    async find(): Promise<object> {
        const find = await this.accountRepository.find()

        return find
    };

    async findById(id: string):Promise<Object> {
        const findById = await this.accountRepository.findById(id)

        return findById
    }
}