import { Router } from 'express'
import courseRoutes from './courseRoutes'
import studentRoutes from './studentRoutes'
import annotationRoutes from "./annotationRoutes"
import teacherRoutes from './teacherRoutes'
import subject_teacher from './subject_teacherRoutes'


const apiRoutes = Router()

apiRoutes.use('/courses', courseRoutes)
apiRoutes.use('/student', studentRoutes)
apiRoutes.use('/annotation', annotationRoutes)
apiRoutes.use('/teacher', teacherRoutes)
apiRoutes.use('/subject_teacher', subject_teacher)

export default apiRoutes
