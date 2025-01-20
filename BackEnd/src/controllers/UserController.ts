import User from '../models/User';
import bcrypt from "bcrypt";
import {sendMail} from "../utils/mail";
import session from 'express-session';
import {Request, Response} from "express"
import { v4 as uuidv4 } from 'uuid';
import fs from "fs";
import {promisify} from "node:util";
const readFileAsync = promisify(fs.readFile)

interface RegisterUserBody {
    username: string;
    email: string;
    password: string;
    celphone: string;
}

export const RegisterUser = async (req : Request, res : Response) : Promise<void> => {
    const htmlTemplate = await readFileAsync('./src/templates/registerTemplate.html','utf-8');
    interface dynamicObj {
        [key: string]: any
    }
    const err : dynamicObj= {
    };
    try{
        const salt : string = await bcrypt.genSalt(10);
        const { username, email, password, celphone }: RegisterUserBody = req.body;
        const hashedPassword = await bcrypt.hash(password, salt);
        const token : string = uuidv4();
        console.log(token);
        const user = new User({username, email, password: hashedPassword,celphone, token: token});
        console.log("saved");
        const mailOptions = {
            from: 'Stepbrosite.com',
            to: email,
            subject: 'Sending Email using Node.js (EXPRESS)',
            text: `Helloooo ${username}!`,
            html: `<a>Here is your link for verify your account! http://localhost:5173/verify/${token}</a>`
        };
        await user.save();
        await sendMail(mailOptions, (info) => {
            console.log("Message sent! nice nice");
            console.log("MESSAGER ID: ", info.messageId);
        });
        res.status(200).send({"Message":"Register Completed"})
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
    }
}

export const TokenUser = async (req : Request, res : Response) : Promise<void> => {
    const token = req.params.token;
    if(!token){
        res.status(401).send({"message":"No token provided"})
        return;
    }
    try{
        const user = await User.findOneAndUpdate({token: token}, {verified: true, token: null})
        if (!user) {
            res.status(404).send({ "message": "Something went wrong..." });
            return;
        }
        res.status(200).send({"message":"Token verified"})
    }catch(error : any){
        res.status(404).send({"message":"No user fonu"})
    }
}

export const ResetPassword = async (req: Request, res: Response) : Promise<void> => {
    const email = req.body.email;
    if(!email){
        res.status(401).send({"message":"No Email Provided"});
    }
    try{
        const token = uuidv4();
        const user = await User.findOneAndUpdate({email: email, token: true, verified: true}, {token: token});
        if(!user) {
            res.status(404).send({"message": "something went wrong"});
            return;
        }

    }catch(error: any){
        const error : string = "No email provided";
        res.status(400).send({"message": error});
    }



}