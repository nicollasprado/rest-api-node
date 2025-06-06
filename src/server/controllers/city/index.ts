import * as create from "./CreateCity";
import * as getAll from "./GetAll";
import * as getById from "./GetById";
import * as updateById from "./UpdateById";
import * as deleteById from "./DeleteById";

export const CityController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
};
