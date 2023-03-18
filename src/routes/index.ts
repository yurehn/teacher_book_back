import { Router } from 'express'
import courseRoutes from './courseRoutes'
import annotationRoutes from "./annotationRoutes"

const apiRoutes = Router()

apiRoutes.use('/courses', courseRoutes)
apiRoutes.use('/annotation', annotationRoutes)

export default apiRoutes
