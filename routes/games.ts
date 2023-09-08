import express, { Request, Response, Router } from "express";
import Game from "../models/game";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const newGame = await Game.create(req.body);
  res.json(newGame);
});

router.get("/", async (req: Request, res: Response) => {
  const games = await Game.find();
  res.json(games);
});

router.get("/:id", async (req: Request, res: Response) => {
  const game = await Game.findById(req.params.id);
  res.json(game);
});

router.put("/:id", async (req: Request, res: Response) => {
  const game = await Game.findByIdAndUpdate(req.params.id, req.body);
  res.json(game);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const game = await Game.findByIdAndDelete(req.params.id);
  res.json("deleted");
});

export default router;
