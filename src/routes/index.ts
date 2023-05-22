import { Router } from 'express'
import observationRoutes from './observationRoutes'
import scoreRoutes from './scoreRoutes'
import studentRoutes from './studentRoutes'
import teacherRoutes from './teacherRoutes'


const apiRoutes = Router()

apiRoutes.use('/student', studentRoutes)
apiRoutes.use('/observation', observationRoutes)
apiRoutes.use('/teacher', teacherRoutes)
apiRoutes.use('/score', scoreRoutes)

export default apiRoutes
