import { Request, Response } from "express";
import {  IAccountController, IAccountService } from "./structure";


export default class AccountController implements IAccountController{
    constructor(
        private accountService: IAccountService
    ){};
    
    async create(req: Request, res: Response): Promise<void> {
        const { id, typeAccount, balance, id_idUser} = req.body;

        if(!id || !typeAccount || !balance || !id_idUser){
            res.status(422).json({message:"All required fiels!"})
        }

        const account = await this.accountService.create({
            id,
            typeAccount,
            balance,
            id_idUser
        })

        // if(account instanceof Error){
        //     res.status(409).json(account.message)
        // }

        res.status(201).json(account)
    };

    async find(req: Request, res: Response): Promise<void> {

        const find = await this.accountService.find()

        res.json(find)
    };

    async findById(req: Request, res: Response): Promise<void> {
        
        const { id } = req.params

        const findById = await this.accountService.findById(id)

        res.json(findById)
    }
}
