import { Router } from "express";
import { authenticateUser, registerUser, signUserIn } from "../../controllers/auth/auth.controller";
import {
  validateSignInBody,
  validateSignUpBody,
} from "../../controllers/auth/validation/user.validation";

const router = Router();

router.post("/signup", validateSignUpBody, registerUser, signUserIn);
router.post("/signin", validateSignInBody, authenticateUser, signUserIn);

export default router;
