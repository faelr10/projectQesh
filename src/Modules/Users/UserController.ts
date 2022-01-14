import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IUserController, IUserService } from "./structure";

 export default class UserController implements IUserController {

    constructor(
        private userService: IUserService
    ) {};
   

    async create(req: Request, res: Response): Promise<void> {
        
    }
 }