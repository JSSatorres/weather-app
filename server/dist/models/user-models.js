"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const concectionDB_1 = __importDefault(require("../db/concectionDB"));
const User = concectionDB_1.default.define("users", {
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
exports.default = User;
//# sourceMappingURL=user-models.js.map