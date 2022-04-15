import { response, Router } from "express";

const router = Router();

router.post("/users", (request, response) => {
  return response.status(201).send("Created");
});

export { router };
