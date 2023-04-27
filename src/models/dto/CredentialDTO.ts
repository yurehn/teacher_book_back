interface BaseCredentialDTO {
  id?: number;
  email: string;
  password: string;
}

export interface CredentialDTO extends BaseCredentialDTO {
}

export interface CreateCredentialDTO extends BaseCredentialDTO { }

export interface UpdateCredentialDTO extends Partial<BaseCredentialDTO> { }
