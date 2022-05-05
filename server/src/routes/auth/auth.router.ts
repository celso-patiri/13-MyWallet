import { Router } from "express";
import {
  validateSignInBody,
  validateSignUpBody,
} from "../../controllers/auth/middleware/user.validation";
import { logUserIn } from "../../controllers/auth/signin.controller";
import { registerUser } from "../../controllers/auth/signup.controller";

const router = Router();

router.post("/signup", validateSignUpBody, registerUser);
router.post("/signin", validateSignInBody, logUserIn);

export default router;
