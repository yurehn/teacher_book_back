import { Router } from "express"
import AnnotationController from "../controllers/AnnotationController"


const annotationRoutes = Router()
const controller = new AnnotationController()

annotationRoutes.get('/', controller.getAll)
annotationRoutes.get('/:id', controller.getById)
annotationRoutes.post('/', controller.create)
annotationRoutes.put('/:id', controller.update)
annotationRoutes.delete('/:id', controller.delete)

export default annotationRoutes
