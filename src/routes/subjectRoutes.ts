import { Router } from "express"
import SubjectController from "../controllers/SubjectController"


const subjectRoutes = Router()
const controller = new SubjectController()

subjectRoutes.get('/', controller.getAll)
subjectRoutes.get('/:id', controller.getById)
subjectRoutes.post('/', controller.create)
subjectRoutes.put('/:id', controller.update)
subjectRoutes.delete('/:id', controller.delete)

export default subjectRoutes
