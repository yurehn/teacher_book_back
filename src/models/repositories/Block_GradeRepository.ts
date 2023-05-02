import { PrismaClient } from "@prisma/client";
import {
  CreateBlock_GradeDTO,
  Block_GradeDTO,
  UpdateBlock_GradeDTO,
} from "../dto/Block_GradeDTO";

const prisma = new PrismaClient();

export default class UpdateBlock_GradeRepository {
  public readonly findAll = async (): Promise<Block_GradeDTO[]> => {
    const block_grade = await prisma.block_grade.findMany();
    return block_grade;
  };

  public readonly findById = async (
    id: number
  ): Promise<Block_GradeDTO | undefined> => {
    const block_grade = await prisma.block_grade.findUnique({
      where: {
        id,
      },
    });

    if (!block_grade) return;

    return block_grade;
  };

  public readonly create = async (
    block_grade: CreateBlock_GradeDTO
  ): Promise<Block_GradeDTO> => {
    const newBlock_grade = await prisma.block_grade.create({
      data: block_grade,
    });

    return newBlock_grade;
  };

  public readonly update = async (
    id: number,
    block_grade: UpdateBlock_GradeDTO
  ): Promise<void> => {
    await prisma.block_grade.update({
      where: {
        id,
      },
      data: block_grade,
    });
  };

  public readonly delete = async (id: number) => {
    await prisma.block_grade.delete({
      where: {
        id,
      },
    });
  };
}
