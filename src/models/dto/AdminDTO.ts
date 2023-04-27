interface BaseAdminDTO {
  id?: number;
  email: string;
  password: string;
}

export interface AdminDTO extends BaseAdminDTO {
}

export interface CreateAdminDTO extends BaseAdminDTO { }

export interface UpdateAdminDTO extends Partial<BaseAdminDTO> { }
