import { NextFunction, Request, Response } from 'express';


export class appError extends Error {
  public readonly statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
  }
}



interface ErrorObject extends Error {
  code?: string;
  meta?: {
    target?: string;
    field_name?: string;
  };
}

export const errorHandler = (error: ErrorObject, _req: Request, res: Response, _next: NextFunction) => {
  

  // Custom errors
  if(error instanceof appError) {
    return res.status(error.statusCode).json({ message: error.message })
  }

  // If JOI validation error is detected
  if (error.name === "ValidationError") {
    return res.status(400).json({ message: error.message})
  }

  // If a collision error is detected (duplicate data [unique]) 
  if (error.code === 'P2002') {
    return res.status(409).json({ message: `[${error.meta?.target}] already exists`})
  }

  // If the value provided is not valid / required field value is invalid. 
  if (error.code === 'P2003') {
    return res.status(409).json({ message: `${error.meta?.field_name} value provided is not valid`})
  }


  console.log('----------------------------------------------------------');
  console.log(error);
  console.log('----------------------------------------------------------');
  return res.status(500).json({ message: 'Internal server error' });
}
