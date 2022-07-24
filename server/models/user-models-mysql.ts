import { DataTypes } from "sequelize";
import db from "../db/concectionDB";

const User = db.define("users",{
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.BOOLEAN
    },
    google:{        
        type:DataTypes.BOOLEAN
    }
}) 

export default User;
    