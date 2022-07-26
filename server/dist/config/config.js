"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.MONGO_HOST = exports.MONGO_PASSWORD = exports.MONGO_USER = exports.MONGO_DATABASE = exports.MONGO_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.MONGO_URL = process.env.MONGO_DB_CNN;
exports.MONGO_DATABASE = process.env.MONGO_DATABASE;
exports.MONGO_USER = process.env.MONGO_USER;
exports.MONGO_PASSWORD = process.env.MONGO_PASSWORD;
exports.MONGO_HOST = process.env.MONGO_HOST || "localhost";
exports.PORT = process.env.PORT;
//# sourceMappingURL=config.js.map