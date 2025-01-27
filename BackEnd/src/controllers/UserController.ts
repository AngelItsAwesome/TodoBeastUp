import User from '../models/User';
import bcrypt from "bcrypt";
import {sendMail} from "../utils/mail";
import session from 'express-session';
import {NextFunction, Request, Response} from "express"
import { v4 as uuidv4 } from 'uuid';
import fs from "fs";
import {promisify} from "node:util";
import user from "../models/User";
const readFileAsync = promisify(fs.readFile)
interface RegisterUserBody {
    username: string;
    email: string;
    password: string;
    celphone: string;
}
interface LoginBody{
    email: string;
    password: string;
}
export const LogUser = async(req: Request, res: Response) : Promise<void> => {
    const {email, password} : LoginBody = req.body;
    try{
        const user = await User.findOne({email: email.toLowerCase()});
        if(!user){
            res.status(400).send({"message": "Invalid email or user"});
            return;
        }
        const comp : string = user.password;
        const check : boolean = await bcrypt.compare(password, comp);
        if(check){
            req.session.user = user;
            req.session.logged = true;
            console.log(req.session);
            res.status(200).send({"message": "correct user!"});
            return;
        }
    }catch(e: unknown){
        console.log(e);
    }
    res.status(400).send({"message": "Invalid password"});
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
    const email : string = req.body.email.toLowerCase();
    if(!email){
        res.status(401).send({"message":"No Email Provided"});
    }
    try{
        const token : string = uuidv4();
        const user = await User.findOneAndUpdate({email: email, verified: true}, {token: token});
        if(!user) {
            res.status(404).send({"message": "something went wrong"});
            return;
        }
        const mailOptions : object = {
            from: 'Stepbrosite.com',
            to: email,
            subject: 'Sending Email using Node.js (EXPRESS)',
            text: `Helloooo dude!`,
            html: `<a href="http://localhost:5173/reset/${token}">Here is your link to recover your account</a>`
        };
        await sendMail(mailOptions, info => {
            console.log("Message sent! nice nice");
        });
        res.status(200).send({"message":"Token send"})
    }catch(error: any){
        const errorMessage : string = "No email provided";
        res.status(400).send({"message": errorMessage});
    }
}
export const RecoverPasswordVerify = async (req : Request, res : Response) : Promise<void> => {
    try{
        const token = req.params.token;
        const user = await User.findOne({token: token, verified: true});
        if(!user) {
            console.log("no user");
            res.status(401).send({"message":"Something went wrong..."});
            return;
        }
        res.status(200).send({"message":"Token verified"})
    }catch(error : unknown){
        res.status(400).send({"message": "invalid token"})
    }
}
export const ChangePassword = async (req : Request, res : Response) : Promise<void> => {
    interface passwords{
        password: string,
        password2: string,
    }
    const token = req.params.token;
    const {password,password2}: passwords = req.body;
    if(password !== password2){
        res.status(400).send({"message":"Passwords are not the same"})
        return;
    }
    if(password.length < 6){
        res.status(400).send({"message":"Password have to be greather than 6 characters"})
        return
    }
    try{
        const hashed = await bcrypt.hash(password, 10);
        const user = await User.findOneAndUpdate({token: token, verified: true}, {password: hashed});
        if(!user){
            res.status(400).send("Something went wrong...")
        }
    }catch(error: unknown){
        console.log(error);
        res.status(400).send("Something wen wrong...")
    }
}


