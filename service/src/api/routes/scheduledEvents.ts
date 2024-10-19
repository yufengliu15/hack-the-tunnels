import express, { Request, Response } from "express";
import { success } from "../utils";
import { ScheduledEventService } from "../../services";

const router = express.Router();

const index = async (request: Request, response: Response) => {
  const subjectCode = request.query.subjectCode as string | undefined;
  const date = request.query.date as string | undefined;
  const time = request.query.time as string | undefined;

  const result = await ScheduledEventService.getFirst(10, subjectCode, date, time);

  return success(response, {
    data: result.val,
    statusCode: 200,
  });
};

router.get("/", index);

export default router;
