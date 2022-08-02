import { Schema, model } from "mongoose";

const UserSchema =  new Schema(
  {
    name:{
      type:String,
      require:[true, 'el nombre del usuario es requerido']
  },
  email:{
      type:String,
      require:[true, 'el corero del usuario es requerido'],
      unique:true
  },
  password:{
      type:String,
      require:[true, 'la contraseña es obligatoria']
  },
  img:{
      type:String,
  },
  rol:{
      type:String,
      require:true,
      emun:["ADMIN_ROLE","USER_ROLE"],
      default:"USER_ROLE"
  },
  state:{
      type:Boolean,
      default:true
  },
  google:{
      type:Boolean,
      default:false
  }
})

UserSchema.methods.toJSON=function(){
  const {__v,password,...user} = this.toObject()
  return user
}

export default model("Users", UserSchema);