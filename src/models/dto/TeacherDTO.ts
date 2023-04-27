interface BaseTeacherDTO {
  id?: number;
  rut: string;
  name: string;
  last_name: string;
  gender: string;
  date_of_bird: Date;
  profile_image: string;
  id_credential: number;
}

export interface TeacherDTO extends BaseTeacherDTO {
  id: number;
}

export interface CreateTeacherDTO extends BaseTeacherDTO { }

export interface UpdateTeacherDTO extends Partial<BaseTeacherDTO> { }
