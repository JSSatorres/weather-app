import { Schema, model } from "mongoose";

const RoleSchema = new Schema({
    rol:{
        type:String,
        require:[true, "the rol is reqired"],
    },
})
export default model("Roles",RoleSchema)