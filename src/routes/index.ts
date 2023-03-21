import { Router } from 'express'
import courseRoutes from './courseRoutes'
import studentRoutes from './studentRoutes'
import annotationRoutes from "./annotationRoutes"
import teacherRoutes from './teacherRoutes'
import subject_teacher from './subject_teacherRoutes'
import grade_subject from './grade_subjectRoutes'
import gradeRoutes from './gradeRoutes'
import subjectRoutes from './subjectRoutes'


const apiRoutes = Router()

apiRoutes.use('/courses', courseRoutes)
apiRoutes.use('/student', studentRoutes)
apiRoutes.use('/annotation', annotationRoutes)
apiRoutes.use('/teacher', teacherRoutes)
apiRoutes.use('/subject_teacher', subject_teacher)
apiRoutes.use('/grade_subject', grade_subject)
apiRoutes.use('/grade', gradeRoutes)
apiRoutes.use('/subject', subjectRoutes)

export default apiRoutes
