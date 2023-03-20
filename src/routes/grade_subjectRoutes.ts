import { Router } from "express"
import Grade_subjectController from "../controllers/Grade_subjectController"


const grade_subjectRoutes = Router()
const controller = new Grade_subjectController()

grade_subjectRoutes.get('/', controller.getAll)
grade_subjectRoutes.get('/:id', controller.getById)
grade_subjectRoutes.post('/', controller.create)
grade_subjectRoutes.put('/:id', controller.update)
grade_subjectRoutes.delete('/:id', controller.delete)

export default grade_subjectRoutes
