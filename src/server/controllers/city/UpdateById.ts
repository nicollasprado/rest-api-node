import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { validation } from "../../shared/middlewares";

const paramSchema = z.object({
  id: z.preprocess((val) => {
    return Number(val);
  }, z.number().int().positive()),
});

interface IParamsProps {
  id?: number;
}

const bodySchema = z.object({
  name: z.string(),
});

type TBody = z.infer<typeof bodySchema>;

export const updateByIdValidation = validation({
  params: paramSchema,
  body: bodySchema,
});

export const updateById = (
  req: Request<IParamsProps, TBody>,
  res: Response,
) => {
  const cityId: IParamsProps = req.params;
  const data: TBody = req.body;

  res.status(StatusCodes.OK).send("Cidade");
};
