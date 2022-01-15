import { Request, Response } from "express";
import { User } from "../../entities/User";

export interface IUser{

    id?: string;

    name: string;

    CPF: string;

    email: string;

    phone: string;
}


export interface IUserRepository { 
    create(data:IUser): Promise< Error | User >;
    find(): Promise<object>;
    findById(id: string): Promise<object>
    delete(id: string):Promise<object>

}

export interface IUserController {
    create(req: Request, res: Response): Promise<void>;
    find(req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<void>
    delete(req: Request, res: Response): Promise<void>

}

export interface IUserService {
    create(data:IUser): Promise< Error | User >;
    find(): Promise<object>;
    findById(id: string): Promise <object>
    delete(id: string): Promise<void>
}