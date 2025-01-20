//Utils
import express from 'express';
import multer from "multer";
const upload = multer();
import bodyParser from "body-parser";
import {connectDB} from "./src/configs/database";
import session from "express-session";
const app = express();
import cors from "cors";
import authRoutes from './src/routes/authRoutes';
//Middlewares

app.use(cors())
app.use(bodyParser.json())
app.use(upload.array('files'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'Keyyys', resave: true, saveUninitialized: true}))

connectDB();

//Routes
app.use('/auth', authRoutes);
app.listen(3000, () => {
    console.log("App listening on port 3000");
});