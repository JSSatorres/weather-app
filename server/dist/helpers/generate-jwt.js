"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        console.log(process.env.SECRETKEY);
        jsonwebtoken_1.default.sign(payload, process.env.SECRETKEY, {
            expiresIn: "4h"
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(" can not generate jwt");
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=generate-jwt.js.map