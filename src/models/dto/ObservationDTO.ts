interface BaseObservationDTO {
  id?: number;
  id_teacher: number;
  id_student: number;
  type_observation: string;
  description: string;
  date_creation: Date;
}

export interface ObservationDTO extends BaseObservationDTO {
  id: number;
}

export interface CreateObservationDTO extends BaseObservationDTO { }

export interface UpdateObservationDTO extends Partial<BaseObservationDTO> { }
