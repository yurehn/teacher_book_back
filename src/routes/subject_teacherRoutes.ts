import { Router } from "express"
import Subject_teacherController from "../controllers/Subject_teacherController"


const subject_teacherRoutes = Router()
const controller = new Subject_teacherController()

subject_teacherRoutes.get('/', controller.getAll)
subject_teacherRoutes.get('/:id', controller.getById)
subject_teacherRoutes.post('/', controller.create)
subject_teacherRoutes.put('/:id', controller.update)
subject_teacherRoutes.delete('/:id', controller.delete)

export default subject_teacherRoutes
