import {Response, Request, NextFunction} from "express";
import {BodyTask} from "../utils/BodyInterfaces";
import {Types} from 'mongoose'
import User from "../models/User";
import Task from "../models/Task";
import TaskRoutes from "../routes/taskRoutes";

export const createTask = async (req: Request, res: Response) : Promise<void> => {
    const {description, userId} : BodyTask = req.body;
    if(userId.length !== 24) {
        res.status(404).send('invalid user')
        return
    }
    console.log(userId);
    interface dynamicObj {
        [key: string]: any
    }
    const err : dynamicObj= {
    };
    try{
        const userIdT= new Types.ObjectId(+userId);

        const task = await new Task({description: description, userId: userIdT});
        await task.save();
    }catch(error : any){
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

export const getTaskByUser = async (req: Request, res: Response) : Promise<void> => {
    const id : string = req.params.userId;
    if(id.length !== 24) {
        res.status(404).send('invalid user')
        return
    }
    const userId = new Types.ObjectId(id);
    try{
        const tasks = await Task.find({userId: userId});
        console.log(tasks);

        res.status(200).send({"message": "no problems"})
        return
    }catch(error : unknown){
        console.log(error)
        res.status(404).send({"message" : "there is something wrong"})
        return
    }
}