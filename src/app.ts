import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import apiRoutes from './routes'
import { errorHandler } from '../middleware/errorHandler'


const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors());

app.use('/api/v1', apiRoutes)
app.use(errorHandler)

app.use((_req, res) => {
  res.status(404).json({
    message: 'Not found'
  })
})


export default app
