import http from 'http'
import { UserTokenPayload } from '../models/dto/AuthDTO'

// Archivo de definicion -> nos permite pasar el token de acceso por (res: Request)

declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingHttpHeaders, Express.Request {
    user?: UserTokenPayload
  }

  export interface Request extends http.ServerResponse, Express.Response {
    user?: UserTokenPayload
  }
}
