
// TODO: profile_image puede ser null
interface BaseTeacherDTO {
  id?: number;
  rut: string;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: Date;
  profile_image: string;
}

export interface TeacherDTO extends BaseTeacherDTO {
  id: number;
}

export interface CreateTeacherDTO extends BaseTeacherDTO {
  credential_id: number;
}

export interface UpdateTeacherDTO extends Partial<CreateTeacherDTO> { }
