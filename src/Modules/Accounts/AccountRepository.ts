import { Repository } from "typeorm";
import BaseRepository from "../../Utils/BaseRepository";
import { Account } from "../../entities/Account";
import { IAccount, IAccountRepository } from "./structure"


export default class AccountRepository extends BaseRepository<Account> implements IAccountRepository{
    getRepo(): Repository<Account> {
        return super._getRepo(Account)
    }

    async create(data: IAccount): Promise<object | Error> {
        
        const { id, typeAccount, balance, id_idUser} = data

        const account = this.getRepo().create({
            id,
            typeAccount,
            balance,
            id_idUser
        });

        await this.getRepo().save(account);

        return account;
    };

    async find(): Promise<object> {
        return await this.getRepo().find()
    };

    async findById(id): Promise<Object> {
        return await this.getRepo().findByIds(id)
    }
}
