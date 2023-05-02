import { PrismaClient } from "@prisma/client";
import { CreateWeek_DayDTO, Week_DayDTO, UpdateWeek_DayDTO } from "../dto/Week_DayDTO";

const prisma = new PrismaClient();

export default class Week_DayRepository {
  public readonly findAll = async (): Promise<Week_DayDTO[]> => {
    const week_day = await prisma.week_day.findMany();
    return week_day;
  };

  public readonly findById = async (id: number): Promise<Week_DayDTO | undefined> => {
    const week_day = await prisma.week_day.findUnique({
      where: {
        id,
      }
    });

    if (!week_day) return;

    return week_day;
  };

  public readonly create = async (week_day: CreateWeek_DayDTO): Promise<Week_DayDTO> => {
    const newWeek_Day = await prisma.week_day.create({
      data: {
        week_day,
      }
    });

    return newWeek_Day;
  };

  public readonly update = async (id: number, week_day: UpdateWeek_DayDTO): Promise<void> => {
    await prisma.week_day.update({
      where: {
        id,
      },
      data: week_day,
    });
  };

  public readonly delete = async (id: number) => {
    await prisma.week_day.delete({
      where: {
        id,
      }
    });
  };
}
