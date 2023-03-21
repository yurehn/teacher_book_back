import { Router } from 'express'
import GradeController from '../controllers/GradeController'

const controller = new GradeController()
const gradeRoutes = Router()

gradeRoutes.get('/', controller.getAll)
gradeRoutes.get('/:id', controller.getById)
gradeRoutes.post('/', controller.create)
gradeRoutes.put('/:id', controller.update)
gradeRoutes.delete('/:id', controller.delete)

export default gradeRoutes
