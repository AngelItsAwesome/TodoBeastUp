import {Response, Request, NextFunction} from "express";
import {BodyTask} from "../utils/BodyInterfaces";
import {Types} from 'mongoose'
import User from "../models/User";
import Task from "../models/Task";
import TaskRoutes from "../routes/taskRoutes";

export const createTask = async (req: Request, res: Response) : Promise<void> => {
    const {description, userId} : BodyTask = req.body;
    console.log(userId);
    interface dynamicObj {
        [key: string]: any
    }
    const err : dynamicObj= {
    };
    try{
        const userIdT= new Types.ObjectId(userId);
        const task = await new Task({description: description, userId: userIdT});
        await task.save();
    }catch(error : any){
        console.log(error);
        if(error.name === 'ValidationError'){
            for(let field in error.errors){
                const errorM = error.errors[field].message;
                const errorField : string = error.errors[field].path;
                err[errorField] = errorM;
            }
        }
        res.status(400).send(err)
        return
    }
    res.status(200).send({"message": "check logs."});
}