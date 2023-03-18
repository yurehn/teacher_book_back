import { Router } from 'express'
import courseRoutes from './courseRoutes'
import studentRoutes from './studentRoutes'

const apiRoutes = Router()

apiRoutes.use('/courses', courseRoutes)
apiRoutes.use('/student', studentRoutes)

export default apiRoutes
