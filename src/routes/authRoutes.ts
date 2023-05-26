import { Router } from "express"
import AuthController from "../controllers/AuthController"


const controller = new AuthController()
const authRoutes = Router()

authRoutes.post('/login', controller.login)
// authRoutes.post('/register', controller.register)


export default authRoutes
