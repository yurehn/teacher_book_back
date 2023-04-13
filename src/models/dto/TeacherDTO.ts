interface BaseTeacherDTO {
  id?: number;
  name: string;
  last_name: string;
  date_of_bird: Date;
  gender: string;
  rut: string;
}

export interface TeacherDTO extends BaseTeacherDTO {
  id: number;
}

export interface CreateTeacherDTO extends BaseTeacherDTO { }

export interface UpdateTeacherDTO extends Partial<BaseTeacherDTO> { }
