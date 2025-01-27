import express,{Request, Response} from "express";
import {GetSession} from "../controllers/SessionController";
const Router = express.Router();

Router.get("/get-session", GetSession);


export default Router;