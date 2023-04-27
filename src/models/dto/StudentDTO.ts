interface BaseStudentDTO {
  id?: number;
  rut: string;
  name: string;
  last_name: string;
  date_of_bird: Date;
  gender: string;
  id_grade: number;
}

export interface StudentDTO extends BaseStudentDTO {
  id: number;
}

export interface CreateStudentDTO extends BaseStudentDTO { }

export interface UpdateStudentDTO extends Partial<BaseStudentDTO> { }
