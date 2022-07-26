import mongoose from 'mongoose'
import { MONGO_URL } from '../config/config';

const dbConnectionMongo  = async()=>{
    
    try {
        await mongoose.connect(MONGO_URL)   
        
    } catch (error) {
        console.log(error);
        throw new Error ("Error a la hora de iniciar la base de datos")
    } 
} 

export default dbConnectionMongo