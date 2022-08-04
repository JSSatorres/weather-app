import { Request, Response, NextFunction} from "express"
import jwt, { Secret } from "jsonwebtoken"

import {AuthRequest} from  "../types"

interface PayloadProp{
    uid:string,
    iat:number
    exp:number
}

const validateJWT =(req: AuthRequest,res: Response,next:NextFunction)=>{
     
    const token = req.header("x-token")     
    if (!token) {
        return res.status(401).json({msg:"no authentifcation user no token"})
    }

    try {
        const payload =jwt.verify(token,process.env.SECRETKEY  as Secret) as PayloadProp
        const {uid } = payload 
        console.log("paso 1");
        
      /*   req.uid = uid        */
        //req.uid= payload.uid

    } catch (error) {
      /*   console.log(token); */
        res.status(401).json({msg:"token are not valid"})
    }
    
    next()
    
}