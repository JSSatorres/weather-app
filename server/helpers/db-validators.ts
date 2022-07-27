import Roles from '../models/role-model';
import Users from '../models/user-models';

export const validatorRole = async(rol="")=>{
    const existRol = await Roles.findOne({rol})
    if (!existRol) {
        throw new Error(`the rol ${rol} is not valid`);            
    }
}

export const validatorEmail = async(email="")=>{
    const emailExits = await Users.findOne({email})    
    if(emailExits){
        throw new Error(`the email  ${email} is already registred`)    
    } 
}

export const validaotorMongoId = async(id="")=>{
    const idExits = await Users.findOne({id})    
    if(!idExits){
        throw new Error(`the id: ${id} did not exist`)    
    } 
}