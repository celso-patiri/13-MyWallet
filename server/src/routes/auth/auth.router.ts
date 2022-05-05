import { Router } from "express";
import { registerUser } from "../../controllers/auth/signup.controller";

const router = Router();

router.post("/signup", registerUser);

export default router;
