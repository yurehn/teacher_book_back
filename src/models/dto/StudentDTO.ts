interface BaseStudentDTO {
  id?: number;
  name: string;
  last_name: string;
  date_of_bird: Date;
  gradeId: number;
  gender: string;
}

export interface StudentDTO extends BaseStudentDTO {
  id: number;
}

export interface CreateStudentDTO extends BaseStudentDTO { }

export interface UpdateStudentDTO extends Partial<BaseStudentDTO> { }
