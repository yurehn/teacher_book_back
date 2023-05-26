import jwt from "jsonwebtoken"
import { AuthDTO, UserTokenPayload } from "../models/dto/AuthDTO"


const secret = process.env.JWT_SECRET as string

if (!secret) {
  throw new Error('JWT Secret not found on env variables')
}


export function generateToken(userId: number, user: AuthDTO): string {
  
  return jwt.sign(
    { sub: userId, email: user.email },
    secret,
    { expiresIn: '7d' }
  )
}

export function verifyToken(token: string): UserTokenPayload {
  const verified = jwt.verify(token, secret)
  
  if (typeof verified === 'string') {
    throw new Error('Invalid token');
  }
  
  // TODO: modificar esto para no tener que convertirlo en unknow y luego a UserTokenPayload
  return verified as unknown as UserTokenPayload
}
