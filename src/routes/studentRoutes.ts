import { Router } from "express"
import StudentController from "../controllers/StudentController"


const studentRoutes = Router()
const controller = new StudentController()

studentRoutes.get('/', controller.getAll)
studentRoutes.get('/:id', controller.getById)
studentRoutes.post('/', controller.create)
studentRoutes.put('/:id', controller.update)
studentRoutes.delete('/:id', controller.delete)

export default studentRoutes
