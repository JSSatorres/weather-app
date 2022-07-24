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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_models_mysql_1 = __importDefault(require("../models/user-models-mysql"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_models_mysql_1.default.findAll();
        res.json({ users });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something go wrong" });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_models_mysql_1.default.findByPk(id);
        if (user) {
            res.json({ user });
        }
        else {
            res.json(`the user with the ${id} doenst exits`);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something go wrong" });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body);
    try {
        const emailExits = yield user_models_mysql_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (emailExits) {
            return res.status(400).json({
                msg: `the email  ${body.email} is already registred`
            });
        }
        const newUser = yield user_models_mysql_1.default.create(body);
        /* await newUser.save()  */
        res.json({ body, newUser });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something go wrong" });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => {
    /*   const {id}=  req.params */
    res.json({
        msg: "update users",
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "delete users",
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user-controller.js.map