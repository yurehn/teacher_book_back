import { TypeObservation, PrismaClient } from "@prisma/client"
import { CreateObservationDTO, ObservationDTO, UpdateObservationDTO } from "../dto/ObservationDTO"


const prisma = new PrismaClient()

export default class ObservationRepository {
  public readonly findAll = async (): Promise<ObservationDTO[]> => {
    const observation = await prisma.observation.findMany()
    return observation
  }

  public readonly findById = async (id: number): Promise<ObservationDTO | undefined> => {
    const observation = await prisma.observation.findUnique({
      where: {
        id
      }
    })

    if (!observation) return

    return observation
  }

  public readonly create = async (observation: CreateObservationDTO): Promise<ObservationDTO> => {
    const newObservation = await prisma.observation.create({
      data: {
        ...observation,
        type_observation: observation.type_observation as TypeObservation
      }
    })

    return newObservation
  }

  public readonly update = async (id: number, observation: UpdateObservationDTO): Promise<void> => {
    await prisma.observation.update({
      where: {
        id
      },
      data: {
        ...observation,
        type_observation: observation.type_observation ? observation.type_observation as TypeObservation : undefined,
      }
    })
  }

  public readonly delete = async (id: number) => {
    await prisma.observation.delete({
      where: {
        id
      }
    })
  }
}