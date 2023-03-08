import { Router } from 'express'
import CourseController from '../controllers/CourseController'

const controller = new CourseController()
const courseRoutes = Router()

courseRoutes.get('/', controller.getAll)

export default courseRoutes
