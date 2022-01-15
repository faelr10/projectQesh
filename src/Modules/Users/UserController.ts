import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { User } from "../../entities/User";
import { IUserController, IUserService } from "./structure";

 export default class UserController implements IUserController {

    constructor(
        private userService: IUserService
    ) {};
   

    async create(req: Request, res: Response): Promise<void> {
        
        const {name,CPF,email,phone} = req.body

        if(!name || !CPF || !email || !phone ){
            res.status(422).json({message:"All required fiels!"})
        }

        const user = await this.userService.create({
            name,
            CPF,
            email,
            phone
        })

        if(user instanceof Error){
            res.status(409).json(user.message)
        }

        res.status(201).json(user)

    };

    async find(req: Request, res: Response): Promise <void>{
        const find = await this.userService.find();

        res.json(find)
    };

    async findById(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const findId = await this.userService.findById(id)
        
         res.json(findId)
    }

    async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        await this.userService.delete(id)

        
         res.status(200).json({message: "Deleted User"})
    }
 }