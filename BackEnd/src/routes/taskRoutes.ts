import {createTask} from "../controllers/TaskController";

import express from "express";
const router = express.Router();

router.post('/create',createTask);

export default router;