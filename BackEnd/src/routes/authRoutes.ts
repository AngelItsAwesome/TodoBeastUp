import express from "express";
const router = express.Router();
import {RegisterUser, TokenUser, ResetPassword, RecoverPassword} from "../controllers/UserController"
//Routes
router.post('/register', RegisterUser);
router.get('/token/:token', TokenUser);
router.post('/recover/', ResetPassword);
router.get('/reset/:token', RecoverPassword);

export default router;