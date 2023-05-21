import { Router } from 'express'
import ScoreController from '../controllers/ScoreController'


const controller = new ScoreController()
const scoreRoutes = Router()

scoreRoutes.get('/', controller.getAll)

// TODO: for future versions
// scoreRoutes.get('/:id', controller.getById)
// scoreRoutes.post('/', controller.create)
// scoreRoutes.put('/:id', controller.update)
// scoreRoutes.delete('/:id', controller.delete)

export default scoreRoutes
