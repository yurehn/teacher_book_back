import { Router } from "express"
import ObservationController from "../controllers/ObservationController"


const controller = new ObservationController()
const obsevationRoutes = Router()

obsevationRoutes.get('/', controller.getAll)
// obsevationRoutes.get('/:id', controller.getById)
// obsevationRoutes.post('/', controller.create)
// obsevationRoutes.put('/:id', controller.update)
// obsevationRoutes.delete('/:id', controller.delete)

export default obsevationRoutes
