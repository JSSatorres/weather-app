"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_models_1 = __importDefault(require("../models/user-models"));
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header("x-token");
    console.log("eeeer token", token);
    if (!token) {
        return res.status(401).json({ msg: "no authentifcation user no token" });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.SECRETKEY);
        console.log(payload);
        const { uid } = payload;
        const user = yield user_models_1.default.findById(uid);
        if (user.state) {
            return res.status(400).json({ msg: "the user was removed before" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        /*   console.log(token); */
        res.status(400).json({ msg: "token are not valid y no se porque dfds" });
    }
});
exports.validateJWT = validateJWT;
//# sourceMappingURL=validator-jwt.js.map