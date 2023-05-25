interface BaseAuthDTO {
  email: string
}


export interface AuthDTO extends BaseAuthDTO {
  // id: number;
}

export interface CreateAuthDTO extends BaseAuthDTO {
  password: string
}

export interface LoginUserDTO extends Partial<AuthDTO> {
  password: string
}
