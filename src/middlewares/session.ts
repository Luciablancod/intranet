import session from "express-session";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { Request, Response, NextFunction } from "express";

const SECRET_JWT_KEY = config.SECRET_JWT_KEY;

const sessionMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token

    req.session = { user:null }

    try{
        const data = jwt.verify(token, SECRET_JWT_KEY)
        req.session.user = data;
    }catch(error){

    }

    next()
};

export default sessionMiddleware;
