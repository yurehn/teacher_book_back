interface BaseTeacherDTO {
  id?: number;
  rut: string;
  name: string;
  last_name: string;
  gender: string;
  date_of_bird: Date;
  profile_image: string | null;
}

export interface TeacherDTO extends BaseTeacherDTO {
  id: number;
}

export interface CreateTeacherDTO extends BaseTeacherDTO {
  credential_id: number;
}

export interface UpdateTeacherDTO extends Partial<BaseTeacherDTO> { }
