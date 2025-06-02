import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { validation } from "../../shared/middlewares";
import { IGetCity } from "./dtos/IGetCity";

const paramSchema = z.object({
  id: z.preprocess((val) => {
    return Number(val);
  }, z.number().int().positive()),
});

interface IParamsProps {
  id?: number;
}

export const getByIdValidation = validation({
  params: paramSchema,
});

export const getById = (req: Request<IParamsProps>, res: Response) => {
  const cityData: IGetCity = req.body;

  res.status(StatusCodes.OK).send("Cidade");
};
