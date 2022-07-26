import { Request, Response } from "express";
import User from "../models/user-models";

export const getUsers = async (req: Request, res: Response) => {  
  try {
    const users = await User.find();
    res.json({users});
  } catch (error :any) {
    console.log(error);    
    res.status(500).json({msg:"something go wrong"})   
  } 
};

export const getUser = async (req: Request, res: Response) => {
  const {id}=  req.params

  try {
   /*  const user = await User.findByPk(id)
    if (user){
      res.json({user});
    }else{
      res.json(`the user with the ${id} doenst exits`)
    }   
 */
  } catch (error :any) {
    console.log(error);    
    res.status(500).json({msg:"something go wrong"})   
  }
 
};

export const createUser = async (req: Request, res: Response) => {
  const {body} =  req


  try {
     /* const emailExits = await User.findOne({
      where:{
        email:body.email
      }
 */
  /*   }) */

   /*  if (emailExits){
      return res.status(400).json({
        msg:`the email  ${body.email} is already registred`
      })
    } */
    const newUser = await User.create(body) 
    await newUser.save() 

     res.json({body})  


  } catch (error :any) {
    console.log(error);    
    res.status(500).json({msg:"something go wrong"})   
  }
};

export const updateUser = (req: Request, res: Response) => {
/*   const {id}=  req.params */
  res.json({
    msg: "update users",
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const {id}=  req.params
  res.json({
    msg: "delete users",
    id
  });
};