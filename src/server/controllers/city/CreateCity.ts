import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { validation } from "../../shared/middlewares";

const bodySchema = z.object({
  id: z.number().int(),
  name: z.string().min(3),
});

type TCity = z.infer<typeof bodySchema>;

export const createValidation = validation({
  body: bodySchema,
});

export const create = (req: Request<{}, {}, TCity>, res: Response) => {
  const data = req.body;

  res.status(StatusCodes.CREATED).json({
    id: 1,
    name: "Natal",
  });
};
