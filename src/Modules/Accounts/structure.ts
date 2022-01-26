import { Request, Response } from "express";
import { ObjectID } from "typeorm";
import { Account } from "../../entities/Account";

export interface IAccount {

    id: string;

    typeAccount: string;

    balance: number;

    id_idUser: string;

};

export interface IAccountRepository {
    create(data:IAccount): Promise<object | Error >;
    find(): Promise<object>
    findById(id: string):Promise<Object>
};

export interface IAccountController {
    create(req: Request, res: Response): Promise<void>
    find(req: Request, res: Response): Promise<void>
    findById(req: Request, res: Response): Promise<void>
};

export interface IAccountService {
    create(data:IAccount): Promise<object | Error>;
    find(): Promise<object>
    findById(id: string):Promise<Object>
}
