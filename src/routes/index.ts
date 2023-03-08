import { Router } from 'express'
import courseRoutes from './courseRoutes'

const apiRoutes = Router()

apiRoutes.use('/courses', courseRoutes)

export default apiRoutes
