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
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("../routes/user-routes"));
const cors_1 = __importDefault(require("cors"));
const concectionDB_1 = __importDefault(require("../db/concectionDB"));
const config_1 = require("../config/config");
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = config_1.PORT || "5000";
        this.connectionDB();
        this.middlewares();
        this.routes();
    }
    connectionDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, concectionDB_1.default)();
                console.log("database is connection");
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //read body
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.users, user_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => console.log("the server is running in", this.port));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map