"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, 'el nombre del usuario es requerido']
    },
    email: {
        type: String,
        require: [true, 'el corero del usuario es requerido'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'la contraseña es obligatoria']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        require: true,
        emun: ["ADMIN_ROLE", "USER_ROLE"],
        default: "USER_ROLE"
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
UserSchema.methods.toJSON = function () {
    //dont use arrow function to bind this.objet to the model
    const _a = this.toObject(), { __v, password, _id } = _a, user = __rest(_a, ["__v", "password", "_id"]);
    user.uid = _id;
    return user;
};
exports.default = (0, mongoose_1.model)("Users", UserSchema);
//# sourceMappingURL=user-models.js.map