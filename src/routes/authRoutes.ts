import { Router } from "express";
import { schemaValidate } from "../middlewares/schemaValidadeMiddleware";

const authRoute = Router();

authRoute.post("/signin");
authRoute.post("/signup");

export default authRoute;
