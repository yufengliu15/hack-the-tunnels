import { ScheduledEvent } from "@prisma/client";
import { prisma } from "../db";
import { Result, Ok } from "ts-results";

export const getFirst = async (
  count: number,
  subjectCode?: string,
  days?: string,
  time?: string
): Promise<Result<ScheduledEvent[], Error>> => {
  const whereConditions: any = {
    term: {
      contains: "Winter 2025 (January-April)",
    },
    course: {
      subjectCode: {
        contains: subjectCode || "",
      },
    },
  };

  if (days) {
    whereConditions.days = { contains: days };
  }

  if (time) {
    whereConditions.startTime = {
      lte: time,
    };
    whereConditions.endTime = {
      gte: time,
    };
  }

  const events = await prisma.scheduledEvent.findMany({
    take: count,
    where: whereConditions,
    include: {
      course: true,
    },
  });

  return Ok(events);
};
