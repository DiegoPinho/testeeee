import express from "express";
import { healthRouter } from "@/routers";

const app = express();
app.use(healthRouter);

app.listen(5000, () => {
  console.log(`Server is up and running.`);
})