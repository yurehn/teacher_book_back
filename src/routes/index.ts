import { Router } from 'express'
import courseRoutes from './courseRoutes'
import annotationRoutes from "./annotationRoutes"
import teacherRoutes from './teacherRoutes'


const apiRoutes = Router()

apiRoutes.use('/courses', courseRoutes)
apiRoutes.use('/annotation', annotationRoutes)
apiRoutes.use('/teacher', teacherRoutes)

export default apiRoutes
