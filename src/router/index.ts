import { Router, Request, Response } from "express";
import { OpenAI } from "../data/controllers";

const router = Router();

router.post("/gen-game", async (req: Request, res: Response) => {
  await OpenAI.GenerateGame(req, res);
});

export default router;
