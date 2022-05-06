import { Router } from "express";
import { authenticateUser, registerUser } from "../../controllers/auth/auth.controller";
import {
  validateSignInBody,
  validateSignUpBody,
} from "../../controllers/auth/middleware/user.validation";

const router = Router();

router.post("/signup", validateSignUpBody, registerUser);
router.post("/signin", validateSignInBody, authenticateUser);

export default router;
