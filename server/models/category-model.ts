import { Schema, model } from "mongoose";

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
export default model("Roles",CategorySchema)