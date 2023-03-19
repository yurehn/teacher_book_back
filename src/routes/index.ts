import { Router } from 'express'
import courseRoutes from './courseRoutes'
import studentRoutes from './studentRoutes'
import annotationRoutes from "./annotationRoutes"
import teacherRoutes from './teacherRoutes'


const apiRoutes = Router()

apiRoutes.use('/courses', courseRoutes)
apiRoutes.use('/student', studentRoutes)
apiRoutes.use('/annotation', annotationRoutes)
apiRoutes.use('/teacher', teacherRoutes)

export default apiRoutes
