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
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getCategories = void 0;
const category_model_1 = __importDefault(require("../models/category-model"));
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 15, since = 0 } = req.query;
    try {
        const [total, users] = yield Promise.all([
            category_model_1.default.countDocuments({ state: true }),
            category_model_1.default.find({ state: true }).limit(Number(limit)).skip(Number(since)),
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
exports.getCategories = getCategories;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield category_model_1.default.findById(id);
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
exports.getCategory = getCategory;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name.toUpperCase();
    console.log(name);
    try {
        const categoryDB = yield category_model_1.default.findOne({ name });
        if (categoryDB) {
            return res.status(400).json({ msg: `la categoria ${name} ya existe` });
        }
        const newCategory = yield category_model_1.default.create({
            name,
            /* user:, */
        });
        yield newCategory.save();
        res.json({ name });
        console.log(name);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "why" });
    }
});
exports.createCategory = createCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id, password, google, email } = _a, rest = __rest(_a, ["_id", "password", "google", "email"]);
    const user = yield category_model_1.default.findByIdAndUpdate(id, rest);
    res.json({
        msg: "put Api",
        user
    });
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield category_model_1.default.findByIdAndUpdate(id, { state: false });
    res.json({
        msg: `delete users ${id}`
    });
});
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=category-controller.js.map