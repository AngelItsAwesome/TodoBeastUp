import {Response, Request, NextFunction} from "express";
import {BodyTask} from "../utils/BodyInterfaces";
import mongoose,{Types} from 'mongoose'
import User from "../models/User";
import Task from "../models/Task";
import TaskRoutes from "../routes/taskRoutes";
import user from "../models/User";

export const createTask = async (req: Request, res: Response) : Promise<void> => {
    const {description, userId, priority, title} : BodyTask = req.body;
    console.log(userId);
    if(userId.length !== 24) {
        res.status(404).send('invalid user')
        return
    }
    interface dynamicObj {
        [key: string]: any
    }
    const err : dynamicObj= {
    };
    try{
        const userIdT : Types.ObjectId = new Types.ObjectId(userId);
        console.log("HEHRRREEE")
        const user = await User.findById(userIdT);
        console.log(user);
        const task = await new Task({description: description, userId: userIdT, title: title, priority: priority});
        if(!user){
           res.status(404).send({"message":"no user found"})
            return
        }
        console.log("Before taks");
        await task.save();
        user.tasks.push(task._id);
        await user.save({ validateBeforeSave: false });
        console.log("Tasks created");
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
        const tasks = await Task.find({userId: userId}).limit(10);
        res.status(200).send({"Tasks": tasks});
        return
    }catch(error : unknown){
        console.log(error)
        res.status(404).send({"message" : "there is something wrong"})
        return
    }
}