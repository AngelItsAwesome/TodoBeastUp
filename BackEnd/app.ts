//Utils
import express from 'express';
import multer from "multer";
const upload = multer();
import bodyParser from "body-parser";
import {connectDB} from "./src/configs/database";
import session from "express-session";
const app = express();
import User from './src/models/User';
import cors from "cors";
import authRoutes from './src/routes/authRoutes';
import homeRoutes from "./src/routes/homeRoutes";
//Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(bodyParser.json())
app.use(upload.array('files'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'my secret',
    resave: true,
    saveUninitialized: true,
}))

declare module 'express-session' {
    interface SessionData {
        logged: boolean;
        user: any;
    }
}
connectDB();
//Routes
app.use('/auth', authRoutes);
app.use('/home', homeRoutes);
app.listen(3000, () => {
    console.log("App listening on port 3000");
});