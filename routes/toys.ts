import express, { Request, Response, Router } from "express";
import Toy from "../models/toy";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const newToy = await Toy.create(req.body);
  res.json(newToy);
});

router.get("/", async (req: Request, res: Response) => {
  const toys = await Toy.find();
  res.json(toys);
});

router.get("/:id", async (req: Request, res: Response) => {
  const toy = await Toy.findById(req.params.id);
  res.json(toy);
});

router.put("/:id", async (req: Request, res: Response) => {
  const toy = await Toy.findByIdAndUpdate(req.params.id, req.body);
  res.json(toy);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const toy = await Toy.findByIdAndDelete(req.params.id);
  res.json("deleted");
});

export default router;
