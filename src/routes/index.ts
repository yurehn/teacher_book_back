import { Router } from 'express'
import courseRoutes from './courseRoutes'
import teacherRoutes from './teacherRoutes'


const apiRoutes = Router()

apiRoutes.use('/courses', courseRoutes)
apiRoutes.use('/teacher', teacherRoutes)

export default apiRoutes
