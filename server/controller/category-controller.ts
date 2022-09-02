import { Request, Response } from "express";

import Category, {CategoryProp} from "../models/category-model";


export const getCategories = async (req: Request, res: Response) => {  
  const { limit = 15, since = 0 } = req.query;

  try {

    const [total, users] = await Promise.all([
      Category.countDocuments({ state: true }),
      Category.find({ state: true }).limit(Number(limit)).skip(Number(since)),
    ]);
   
    res.json({
      total,
      users
    });

  } catch (error :any) {
    console.log(error);    
    res.status(500).json({msg:"something go wrong"})   
  } 
};

export const getCategory = async (req: Request, res: Response) => {
  const {id}=  req.params

  try {
   const user = await Category.findById(id)
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


export const createCategory = async (req: Request, res: Response) => {
   const name =  req.body.name.toUpperCase() 
   console.log(name);
   
    
  try {    
    const categoryDB = await Category.findOne({name})

    if (categoryDB) {
      return  res.status(400).json({msg:`la categoria ${name} ya existe`})
    }

    const newCategory = await Category.create({
      name,
      /* user:, */
    })     
    await newCategory.save()  

    res.json({name})  
    console.log(name);
    

  } catch (error :any) {
    console.log(error);    
    res.status(500).json({msg:"why"})   
  }
};

export const updateCategory = async(req: Request, res: Response) => {
  const {id}=  req.params 
  const { _id, password, google,email, ...rest } = req.body;

  
  const user = await Category.findByIdAndUpdate(id, rest);
  
  res.json({
    msg: "put Api",
    user
  });
};

export const deleteCategory = async(req: Request, res: Response) => {
  const {id}=  req.params
  
  const user = await Category.findByIdAndUpdate(id, { state: false });
  res.json({
    msg: `delete users ${id}`
  });
};