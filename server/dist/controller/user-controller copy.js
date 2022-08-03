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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_models_1 = __importDefault(require("../models/user-models"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 15, since = 0 } = req.query;
    try {
        const [total, users] = yield Promise.all([
            user_models_1.default.countDocuments({ state: true }),
            user_models_1.default.find({ state: true }).limit(Number(limit)).skip(Number(since)),
        ]);
        res.json({
            total,
            users
        });
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
        const user = yield user_models_1.default.findById(id);
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
    const { name, password, email, rol } = req.body;
    try {
        const newUser = yield user_models_1.default.create({ name, password, email, rol });
        //encrrypt password
        const salt = bcryptjs_1.default.genSaltSync(10);
        newUser.password = bcryptjs_1.default.hashSync(password, salt);
        yield newUser.save();
        res.json({ newUser });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "aaaa este eroror adasdad" });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id, password, google, email } = _a, rest = __rest(_a, ["_id", "password", "google", "email"]);
    if (password) {
        const salt = bcryptjs_1.default.genSaltSync();
        rest.password = bcryptjs_1.default.hashSync(password, salt);
    }
    const user = yield user_models_1.default.findByIdAndUpdate(id, rest);
    res.json({
        msg: "put Api",
        user
    });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_models_1.default.findByIdAndUpdate(id, { state: false });
    res.json({
        msg: `delete users ${id}`
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user-controller%20copy.js.map