import {createTask, getTaskByUser} from "../controllers/TaskController";

import express from "express";
const router = express.Router();

router.post('/create',createTask);

router.get('/byUser/:userId',getTaskByUser);

export default router;