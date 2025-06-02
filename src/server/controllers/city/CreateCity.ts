import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { validation } from "../../shared/middlewares";

const bodySchema = z.object({
  name: z.string(),
});

const querySchema = z.object({
  filter: z.string().optional(),
});

type TCity = z.infer<typeof bodySchema>;

export const createValidation = validation({
  body: bodySchema,
  query: querySchema,
});

export const create = (req: Request<{}, {}, TCity>, res: Response) => {
  const data = bodySchema.parse(req.body);

  res.status(StatusCodes.CREATED).send("Criado");
};
