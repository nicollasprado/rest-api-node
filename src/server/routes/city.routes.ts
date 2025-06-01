import { Router } from "express";
import { CityController } from "./../controllers";

const cityRouter = Router();

cityRouter.post(
  "/",
  CityController.createBodyValidator,
  CityController.createQueryValidator,
  CityController.create,
);

export default cityRouter;
