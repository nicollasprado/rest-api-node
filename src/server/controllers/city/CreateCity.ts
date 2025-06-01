import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";

const bodyValidation = z.object({
  name: z.string(),
});

type ICity = z.infer<typeof bodyValidation>;

export const createBodyValidator: RequestHandler = (req, res, next) => {
  const validation = bodyValidation.safeParse(req.body);

  if (!validation.success) {
    res.status(StatusCodes.BAD_REQUEST).json(validation.error.issues);
  }

  next();
};

const queryValidation = z.object({
  filter: z.string(),
});

export const createQueryValidator: RequestHandler = (req, res, next) => {
  const validation = queryValidation.safeParse(req.query);

  if (!validation.success) {
    res.status(StatusCodes.BAD_REQUEST).json(validation.error.issues);
  }

  next();
};

export const create = (req: Request<{}, {}, ICity>, res: Response) => {
  const data = bodyValidation.parse(req.body);

  res.status(StatusCodes.CREATED).send("Criado");
};
