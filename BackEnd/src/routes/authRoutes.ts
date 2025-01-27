import express from "express";
const router = express.Router();
import {RegisterUser, TokenUser, ResetPassword, RecoverPasswordVerify, ChangePassword, LogUser} from "../controllers/UserController";

//Routes
router.get('/token/:token', TokenUser);
router.get('/reset/:token', RecoverPasswordVerify);
router.post('/login', LogUser);
router.post('/register', RegisterUser);
router.post('/changePassword/:token', ChangePassword);
router.put('/recover/', ResetPassword);

export default router;