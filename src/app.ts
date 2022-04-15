import express from "express";
import { router } from "./router";

const app = express();
app.use(router);
console.log("Server ON");

export { app };
