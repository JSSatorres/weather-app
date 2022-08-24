import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator';

import User, {UserProp} from "../models/user-models";


export const getPlaces = async (req: Request, res: Response) => {  
  const { limit = 15, since = 0 } = req.query;

  try {

    const [total, places] = await Promise.all([
      User.countDocuments({ state: true }),
      User.find({ state: true }).limit(Number(limit)).skip(Number(since)),
    ]);
   
    res.json({
      total,
      places
    });

  } catch (error :any) {
    console.log(error);    
    res.status(500).json({msg:"something go wrong"})   
  } 
};

export const getPlace = async (req: Request, res: Response) => {
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


export const createPlace = async (req: Request, res: Response) => {
  const {name,password,email,rol} =  req.body
    
  try {    
    const newUser = await User.create({name,password,email,rol}) 
    
    //encrrypt password
    const salt = bcrypt.genSaltSync(10);
    newUser.password = bcrypt.hashSync(password,salt)
    
    await newUser.save() 

    res.json({newUser})  
    console.log(newUser);
    

  } catch (error :any) {
    console.log(error);    
    res.status(500).json({msg:"aaaa este eroror adasdad"})   
  }
};

export const updatePlace = async(req: Request, res: Response) => {
  const {id}=  req.params 
  const { _id, password, google,email, ...rest } = req.body;

  if (password) {
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }
  
  const place = await User.findByIdAndUpdate(id, rest);
  
  res.json({
    msg: "put Api",
    place
  });
};

export const deletePlace = async(req: Request, res: Response) => {
  const {id}=  req.params
  
  const user = await User.findByIdAndUpdate(id, { state: false });
  res.json({
    msg: `delete places ${id}`
  });
};