import { Request, Response, Router } from "express";

const healthRouter = Router();

healthRouter.get("/health", (req: Request, res: Response) => res.send("I am alive!"));

export { healthRouter };