"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: "get users",
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "get user",
        id
    });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "create users",
        body
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "update users",
        id
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