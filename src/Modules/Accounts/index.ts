import { Router } from "express";

import AccountRepositoryClass from "./AccountRepository";
import AccountControllerClass from "./AccountController";
import AccountServiceClass from "./AccountService";
import { Account } from "../../entities/Account";

export const AccountRepository = new AccountRepositoryClass()
export const AccountService = new AccountServiceClass(AccountRepository);
export const AccountController = new AccountControllerClass(AccountService);

export const AccountRoutes = Router()

AccountRoutes.post('/', (req, res) => AccountController.create(req, res));
AccountRoutes.get('/', (req, res) => AccountController.find(req, res));
AccountRoutes.get('/:id', (req, res) => AccountController.findById(req, res));