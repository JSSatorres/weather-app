import { Schema, model } from "mongoose";

const RoleSchema = new Schema({
    rol:{
        type:String,
        require:[true, "el rol es obligatorio"],
    },
})
export default model("Roles",RoleSchema)