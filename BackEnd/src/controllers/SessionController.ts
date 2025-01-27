import {Request, Response} from 'express';

export const GetSession = async function (req: Request, res: Response) {
    if(req.session.user){
        res.status(200).send(req.session.user);
        return
    }
    res.status(400).send({"message":"NO SESSION"});

}