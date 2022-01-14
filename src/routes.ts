import { Router } from 'express'
import { UserRoutes } from './Modules/Users'

const mainRoute = Router()

mainRoute.use('/user', UserRoutes)

export default mainRoute