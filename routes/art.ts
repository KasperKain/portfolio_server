import express, { Request, Response, Router } from "express";
import Art from "../models/art";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const newArt = await Art.create(req.body);
  res.json(newArt);
});

router.get("/", async (req: Request, res: Response) => {
  const Arts = await Art.find();
  res.json(Arts);
});

router.get("/:id", async (req: Request, res: Response) => {
  const art = await Art.findById(req.params.id);
  res.json(Art);
});

router.put("/:id", async (req: Request, res: Response) => {
  const art = await Art.findByIdAndUpdate(req.params.id, req.body);
  res.json(Art);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const art = await Art.findByIdAndDelete(req.params.id);
  res.json("deleted");
});

export default router;
