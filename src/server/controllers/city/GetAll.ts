import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { validation } from "../../shared/middlewares";

const querySchema = z.object({
  page: z.preprocess((value) => {
    if (value) return Number(value);
  }, z.number().int().positive().optional()),
  limit: z.preprocess((value) => {
    if (value) return Number(value);
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
  // this will be changed in future
  res.setHeader("access-control-expose-header", "x-total-count");
  res.setHeader("x-total-count", 1);

  res.status(StatusCodes.OK).json([
    {
      id: 1,
      name: "Natal",
    },
  ]);
};
