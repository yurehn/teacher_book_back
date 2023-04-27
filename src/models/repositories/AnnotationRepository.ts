import { TypeAnnotation, PrismaClient } from "@prisma/client"
import { CreateAnnotationDTO, AnnotationDTO, UpdateAnnotationDTO } from "../dto/ObservationDTO"


const prisma = new PrismaClient()

export default class AnnotationRepository {
  public readonly findAll = async (): Promise<AnnotationDTO[]> => {
    const annotation = await prisma.annotation.findMany()
    return annotation
  }

  public readonly findById = async (id: number): Promise<AnnotationDTO | undefined> => {
    const annotation = await prisma.annotation.findUnique({
      where: {
        id
      }
    })

    if (!annotation) return

    return annotation
  }

  public readonly create = async (annotation: CreateAnnotationDTO): Promise<AnnotationDTO> => {
    const newAnnotation = await prisma.annotation.create({
      data: {
        ...annotation,
        type_annotation: annotation.type_annotation as TypeAnnotation
      }
    })

    return newAnnotation
  }

  public readonly update = async (id: number, annotation: UpdateAnnotationDTO): Promise<void> => {
    await prisma.annotation.update({
      where: {
        id
      },
      data: {
        ...annotation,
        type_annotation: annotation.type_annotation ? annotation.type_annotation as TypeAnnotation : undefined,
      }
    })
  }

  public readonly delete = async (id: number) => {
    await prisma.annotation.delete({
      where: {
        id
      }
    })
  }
}