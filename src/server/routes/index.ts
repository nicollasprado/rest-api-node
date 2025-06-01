import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
  res.send("Sucesso");
});

router.post("/add/:id", (req, res) => {
  console.log(req.body, req.params.id, req.query.nome);
  res.status(StatusCodes.CREATED).json(req.body);
});

export default router;
