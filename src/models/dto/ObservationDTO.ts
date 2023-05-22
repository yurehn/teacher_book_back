interface BaseObservationDTO {
  id?: number;
  teacher_id: number;
  student_id: number;
  type_observation: string;
  description: string;
  date_creation: Date;
}

export interface ObservationDTO extends BaseObservationDTO {
  id: number;
}

export interface CreateObservationDTO extends BaseObservationDTO { }

export interface UpdateObservationDTO extends Partial<BaseObservationDTO> { }
