interface BaseAuthDTO {
  email: string
  password: string
}


export interface AuthDTO extends BaseAuthDTO {
  id: number;
}

// TODO: for future versions
// export interface CreateAuthDTO extends BaseAuthDTO {
//   password: string
// }

export interface LoginUserDTO extends BaseAuthDTO { }

export interface UserTokenPayload {
  sub: number,
  email: string,
  iat: number,
  exp: number
}
