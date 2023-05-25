import { Router } from 'express'
import observationRoutes from './observationRoutes'
import scoreRoutes from './scoreRoutes'
import studentRoutes from './studentRoutes'
import teacherRoutes from './teacherRoutes'
import authRoutes from './authRoutes'


const apiRoutes = Router()

apiRoutes.use('/student', studentRoutes)
apiRoutes.use('/observation', observationRoutes)
apiRoutes.use('/teacher', teacherRoutes)
apiRoutes.use('/score', scoreRoutes)
apiRoutes.use('/auth', authRoutes)

export default apiRoutes
