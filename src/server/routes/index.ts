import { Router } from "express";
import cityRouter from "./city.routes";

const router = Router();

router.get("/", (req, res) => {
  res.send("Sucesso");
});

router.use("/city", cityRouter);

export default router;
