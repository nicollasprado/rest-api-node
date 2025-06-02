import { Router } from "express";
import { CityController } from "./../controllers";

const cityRouter = Router();

cityRouter.post("/", CityController.createValidation, CityController.create);

export default cityRouter;
