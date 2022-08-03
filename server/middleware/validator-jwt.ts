import { validationResult } from "express-validator"
import { Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"


export const validateJWT =(req: Request,res: Response,next:NextFunction)=>{
    const token = req.header("x-token")
    if (!token) {
        return res.status(401).json({msg:"no authentifcation user"})
    }
    try {

        const payload =jwt.verify(token,process.env.SECRETKEY  as string)
      //  const {uid } = payload
        console.log(payload.uid); 
        
        //req.uid= payload.uid

    } catch (error) {
        console.log(token);
        res.status(401).json({msg:"token are not valid"})
    }
    
    next()
    
}