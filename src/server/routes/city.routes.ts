import { Router } from "express";
import { CityController } from "./../controllers";

const cityRouter = Router();

cityRouter.post("/", CityController.createValidation, CityController.create);
cityRouter.get("/", CityController.getAllValidation, CityController.getAll);
cityRouter.get(
  "/:id",
  CityController.getByIdValidation,
  CityController.getById,
);
cityRouter.patch(
  "/:id",
  CityController.updateByIdValidation,
  CityController.updateById,
);
cityRouter.delete(
  "/:id",
  CityController.deleteByIdValidation,
  CityController.deleteById,
);

export default cityRouter;
