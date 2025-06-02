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

export const deleteByIdValidation = validation({
  params: paramSchema,
});

export const deleteById = (req: Request<IParamsProps>, res: Response) => {
  const cityId: IParamsProps = req.params;

  res.status(StatusCodes.OK);
};
