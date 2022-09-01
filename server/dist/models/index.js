"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
const category_model_1 = __importDefault(require("./category-model"));
const server_1 = __importDefault(require("./server"));
const user_models_1 = __importDefault(require("./user-models"));
const role_model_1 = __importDefault(require("./role-model"));
/* export const {Category,Server,Users,Roles}  */
exports.models = { Category: category_model_1.default, Server: server_1.default, Roles: role_model_1.default, Users: user_models_1.default };
//# sourceMappingURL=index.js.map