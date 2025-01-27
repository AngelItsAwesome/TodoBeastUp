import { Request, Response, NextFunction } from 'express'
const getSessionMiddleWare = async function (req: Request, res: Response, next : NextFunction) : Promise<void> {;
    if(req.session.user){
        console.log(req.session.user);
        next();
    }else {
        res.status(401).send({"message" : "User not logged in"});
    }
}

export default getSessionMiddleWare;