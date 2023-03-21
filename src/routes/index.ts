import { Router } from 'express'
import courseRoutes from './courseRoutes'
import studentRoutes from './studentRoutes'
import annotationRoutes from "./annotationRoutes"
import teacherRoutes from './teacherRoutes'
import subjectRoutes from './subjectRoutes'


const apiRoutes = Router()

apiRoutes.use('/courses', courseRoutes)
apiRoutes.use('/student', studentRoutes)
apiRoutes.use('/annotation', annotationRoutes)
apiRoutes.use('/teacher', teacherRoutes)
apiRoutes.use('/subject', subjectRoutes)

export default apiRoutes
