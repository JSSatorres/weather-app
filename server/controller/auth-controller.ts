import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator';

import User from "../models/user-models";
import { generateJWT } from "../helpers/generate-jwt";

/**
 * 
 * @param req 
 * @param res 
 * check email is im DB
 * check users is active
 * check password
 * generate JWT
 */
export const login = async (req: Request, res: Response) => {  

 const {email,password} = req.body

  const user = await User.findOne({email:email})
  if (!user) {
    return res.status(400).json({msg:"the email / password are not corrects - email"})
  }
  if (!user.state) {
    return res.status(400).json({msg:"the email / password are not corrects - estate = false"})
  }

  const validPassword = bcrypt.compareSync(password, user.password)
  if (!validPassword) {
    return res.status(400).json({msg:"the email / password are not corrects - Password"})
  }
  console.log(user.id);    
  console.log(req.header);
  console.log(req.body);
  
  
  
  /* const token = await generateJWT(user.id) */
  try { 
   
    res.json({
      user,
      //token
    });

  } catch (error ) {
    console.log(error);    
    res.status(500).json({msg:"something go wrong"})   
  } 
};
/* 
export const getUser = async (req: Request, res: Response) => {
  const {id}=  req.params

  try {
   const user = await User.findById(id)
    if (user){
      res.json({user});
    }else{
      res.json(`the user with the ${id} doenst exits`)
    }   
 
  } catch (error :any) {
    console.log(error);    
    res.status(500).json({msg:"something go wrong"})   
  }
 
};

export const createUser = async (req: Request, res: Response) => {

  const {name,password,email,rol} =  req.body
    
  try {    
    const newUser = await User.create({name,password,email,rol}) 
    //encrrypt password
    const salt = bcrypt.genSaltSync(10);
    newUser.password = bcrypt.hashSync(password,salt)
    
    await newUser.save() 

    res.json({newUser})  

  } catch (error :any) {
    console.log(error);    
    res.status(500).json({msg:"aaaa este eroror adasdad"})   
  }
};

export const updateUser = async(req: Request, res: Response) => {
  const {id}=  req.params 
  const { _id, password, google,email, ...rest } = req.body;

  if (password) {
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }
  
  const user = await User.findByIdAndUpdate(id, rest);
  
  res.json({
    msg: "put Api",
    user
  });
};

export const deleteUser = async(req: Request, res: Response) => {
  const {id}=  req.params
  const user = await User.findByIdAndUpdate(id, { state: false });
  res.json({
    msg: `delete users ${id}`
  });
}; */