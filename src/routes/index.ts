import { Router } from 'express'
import observationRoutes from './observationRoutes'
import scoreRoutes from './scoreRoutes'
import studentRoutes from './studentRoutes'
import teacherRoutes from './teacherRoutes'
import authRoutes from './authRoutes'
import { tokenValidator } from '../../middleware/tokenValidator'


const apiRoutes = Router()

apiRoutes.use('/auth', authRoutes)
apiRoutes.use('/student', tokenValidator(), studentRoutes)
apiRoutes.use('/teacher', tokenValidator(), teacherRoutes)
apiRoutes.use('/observation', tokenValidator(), observationRoutes)
apiRoutes.use('/score', tokenValidator(), scoreRoutes)

export default apiRoutes
