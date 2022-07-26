"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/* import db from "../db/concectionDBold"; */
const User = db.define("users", {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    google: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
/* export default User; */
//# sourceMappingURL=user-models-mysql.js.map