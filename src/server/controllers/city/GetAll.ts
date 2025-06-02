import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { validation } from "../../shared/middlewares";

const querySchema = z.object({
  page: z.preprocess((value) => {
    return Number(value);
  }, z.number().int().positive().optional()),
  limit: z.preprocess((value) => {
    return Number(value);
  }, z.number().int().positive().optional()),
  filter: z.string().optional(),
});

type TQueryProps = z.infer<typeof querySchema>;

export const getAllValidation = validation({
  query: querySchema,
});

export const getAll = (
  req: Request<{}, {}, {}, TQueryProps>,
  res: Response,
) => {
  const data = req.body;

  res.status(StatusCodes.OK).send("Cidades");
};
