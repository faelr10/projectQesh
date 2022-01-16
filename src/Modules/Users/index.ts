import { Router } from "express";

import UserRepositoryClass from "./UserRepository";
import UserControllerClass from "./UserController";
import UserServiceClass from "./UserService";
import { User } from "../../entities/User";

export const UserRepository = new UserRepositoryClass()
export const UserService = new UserServiceClass(UserRepository);
export const UserController = new UserControllerClass(UserService);

export const UserRoutes = Router()

UserRoutes.post('/', (req, res) => UserController.create(req, res))
UserRoutes.get('/', (req, res) => UserController.find(req, res));
UserRoutes.get('/:id', (req, res) => UserController.findById(req, res));
UserRoutes.put('/:id', (req, res) => UserController.update(req, res));
UserRoutes.delete('/:id',(req, res) => UserController.delete(req, res));
