"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var userHandler = __importStar(require("../user-medical-api"));
var routes = function ($) {
    $.get("/", function (req, res, next) {
        res.send('<bold> Hello World </b>');
    });
    $.all('/users', userHandler.User);
    return $;
};
exports.default = routes;
