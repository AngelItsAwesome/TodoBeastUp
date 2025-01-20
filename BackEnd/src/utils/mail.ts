import nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "vashthestampede123456789@gmail.com",
        pass: "glju sulo phvh jwyp"
    }
});

export const sendMail = async (mailDetails: Options, callback: (arg0: SentMessageInfo) => void) => {
    try{
        const info = await transport.sendMail(mailDetails)
        callback(info);
    }catch(error){
        console.error(error)
    }
}