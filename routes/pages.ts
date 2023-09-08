import express, { Request, Response, Router } from "express";
import Page from "../models/page";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const newPage = await Page.create(req.body);
  console.log(req.body);
  res.json(newPage);
});

router.get("/", async (req: Request, res: Response) => {
  const pages = await Page.find();
  res.json(pages);
});

router.get("/:id", async (req: Request, res: Response) => {
  const page = await Page.findById(req.params.id);
  res.json(page);
});

router.put("/:id", async (req: Request, res: Response) => {
  const page = await Page.findByIdAndUpdate(req.params.id, req.body);
  res.json(page);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const page = await Page.findByIdAndDelete(req.params.id);
  res.json("deleted");
});

export default router;
