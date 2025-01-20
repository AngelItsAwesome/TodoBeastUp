import express from "express";
const router = express.Router();
import {RegisterUser, TokenUser} from "../controllers/UserController"
//Routes
router.post('/register', RegisterUser);
router.get('/token/:token', TokenUser);

export default router;