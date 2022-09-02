import { Schema, model } from "mongoose";

export interface CategoryProp extends Document{
    name:string,
    state:boolean,
    id:string
    user:string
} 

const CategorySchema = new Schema({
    name:{
        type:String,
        require:[true, "the name is reqired"],
    },
    state:{
        type:Boolean,
        default:true,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        required:true
    }
})
export default model("Category",CategorySchema)