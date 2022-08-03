"use strict";
exports.__esModule = true;
exports.generateJWT = void 0;
var generateJWT = function (uid) {
    return new Promise(function (resolve, reject) {
        var payload = { uid: uid };
        console.log(process.env.SECRETKEY);
        /* jwt.sign(payload,process.env.SECRETKEY) */
    });
};
exports.generateJWT = generateJWT;
