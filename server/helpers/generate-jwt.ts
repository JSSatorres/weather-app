import jwt, { Secret } from "jsonwebtoken"

export const generateJWT = (uid:string)=>{
    return new Promise ((resolve,reject)=>{
        const payload = {uid}
        /* onst secretOrPrivateKey: jwt.Secret =process.env.SECRETKEY */
      
        
        jwt.sign(payload, process.env.SECRETKEY as Secret ,{
            expiresIn:"4h"
        },(err,token)=>{
            if (err) {
                console.log(err);
                reject(" can not generate jwt")
            }else{
                resolve(token)
            }
        }) 
    })
}