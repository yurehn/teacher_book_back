import { NextFunction, Request, Response } from "express";


interface ControllerFunction {
  (req: Request, res: Response): Promise<void>
}

export const tryCatch = (controller: ControllerFunction) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await controller(req, res)
  } catch (error) {
    return next(error)
  }
}
