import { Request, Response } from 'express'
import { CourseDTO } from '../models/dto/CourseDTO'

export default class CourseController {
    public readonly getAll = async (_req: Request, res: Response) => {
        const courses: CourseDTO[] = [
            {
                id: 1,
                name: '4to A',
            }
        ]
        res.json(courses)
    }
}
