import { Request, Response } from "express";

export interface IUser{
    
    id?: string;

    name: string;

    CPF: string;

    email: string;

    phone: string;
}


export interface IUserRepository { 

}


export interface IUserController {

}

export interface IUserService {

}