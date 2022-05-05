import { Router } from "express";
import { logUserIn } from "../../controllers/auth/signin.controller";
import { registerUser } from "../../controllers/auth/signup.controller";

const router = Router();

router.post("/signup", registerUser);
router.post("/signin", logUserIn);

export default router;
