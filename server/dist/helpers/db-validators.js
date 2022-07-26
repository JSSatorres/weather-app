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
exports.validaotorMongoId = exports.validatorEmail = exports.validatorRole = void 0;
const role_model_1 = __importDefault(require("../models/role-model"));
const user_models_1 = __importDefault(require("../models/user-models"));
const validatorRole = (rol = "") => __awaiter(void 0, void 0, void 0, function* () {
    const existRol = yield role_model_1.default.findOne({ rol });
    if (!existRol) {
        throw new Error(`the rol ${rol} is not valid`);
    }
});
exports.validatorRole = validatorRole;
const validatorEmail = (email = "") => __awaiter(void 0, void 0, void 0, function* () {
    const emailExits = yield user_models_1.default.findOne({ email });
    if (emailExits) {
        throw new Error(`the email  ${email} is already registred`);
    }
});
exports.validatorEmail = validatorEmail;
const validaotorMongoId = (id = "") => __awaiter(void 0, void 0, void 0, function* () {
    const idExits = yield user_models_1.default.findOne({ id });
    if (!idExits) {
        throw new Error(`the id: ${id} did not exist`);
    }
});
exports.validaotorMongoId = validaotorMongoId;
//# sourceMappingURL=db-validators.js.map