import { Request, Response, NextFunction} from "express"
import jwt, { Secret } from "jsonwebtoken"
import { ObjectId } from "mongoose";

import User, {UserProp} from "../models/user-models";
import {AuthRequest} from  "../types"

interface PayloadProp{
    uid:string
    iat:number
    exp:number
}

export const validateJWT =async (req:AuthRequest,res: Response,next:NextFunction)=>{
     
    const token = req.header("x-token")  
    console.log(token);
       
    if (!token) {
        return res.status(401).json({msg:"no authentifcation user no token"})
    } 

    try {
        const payload =jwt.verify(token,process.env.SECRETKEY  as Secret) as PayloadProp
        console.log(payload);
        
        const {uid } = payload  
       
        const user = await User.findById(uid);
        req.user= user
        next()

    } catch (error) {
      /*   console.log(token); */
        res.status(400).json({msg:"token are not valid y no se porque dfds"})
    }
    
    
    
}