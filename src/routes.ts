import { Router } from 'express'
import { AccountRoutes } from './Modules/Accounts'
import { UserRoutes } from './Modules/Users'

const mainRoute = Router()

mainRoute.use('/user', UserRoutes)
mainRoute.use('/Account',AccountRoutes);

export default mainRoute