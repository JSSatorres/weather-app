"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateJWT = (req, res, next) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({ msg: "no authentifcation user" });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.SECRETKEY);
        //  const {uid } = payload
        console.log(payload.uid);
        //req.uid= payload.uid
    }
    catch (error) {
        console.log(token);
        res.status(401).json({ msg: "token are not valid" });
    }
    next();
};
exports.validateJWT = validateJWT;
//# sourceMappingURL=validator-jwt.js.map