import { Router } from "express"
import TeacherController from "../controllers/TeacherController"


const teacherRoutes = Router()
const controller = new TeacherController()

teacherRoutes.get('/', controller.getAll)
// teacherRoutes.get('/:id', controller.getById)
// teacherRoutes.post('/', controller.create)
// teacherRoutes.put('/:id', controller.update)
// teacherRoutes.delete('/:id', controller.delete)

export default teacherRoutes
