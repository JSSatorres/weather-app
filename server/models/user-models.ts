import { Schema, model } from "mongoose";

interface UserProp{
    name:string,
    email: string,
    password:string,
    img:string,
    rol:string,
    state:boolean,
    google:boolean,
} 

const UserSchema =  new Schema<UserProp>(
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
  const {__v,password,_id, ...user} = this.toObject()
  user.uid=_id;
  return user
}

export default model("Users", UserSchema);