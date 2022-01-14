import { Router } from "express";

import UserRepositoryClass from "./UserRepository";
import UserControllerClass from "./UserController";
import UserServiceClass from "./UserService";

export const UserRepository = new UserRepositoryClass()
export const UserService = new UserServiceClass(UserRepository);
export const UserController = new UserControllerClass(UserService);

export const UserRoutes = Router()

UserRoutes.post('/', (req, res) => UserController.create(req, res))