"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../module/users");
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var Counter_1 = require("../../../controllers/Counter");
var Db_1 = __importDefault(require("../../../controllers/core/Db"));
var User = /** @class */ (function () {
    function User() {
        var _this = this;
        /**
         * we instanciate database class with mongoose
         * user model to make all our operations only
         * in this model
         */
        this.user = new Db_1.default(users_1.USER);
        //Protected methods
        /**
         *
         * @param id
         * @returns { object }
         */
        // protected findUserById = (id : string) => this.user.getOneField("id", id);
        /**
         *
         * @param { email }
         * @returns { object }
         */
        this.findUserByEmail = function (email, cb) { return _this.user.getOneField("email", email, cb); };
        /*
         to save User in ittyni db must have 4 fields :
             email
             username
             password
             and generated ittyni code
        */
        //Login Methods
        this.applyToAuthentify = function (args) { return __awaiter(_this, void 0, void 0, function () {
            var user, isEqual, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_1.USER.findOne({ email: args.userInput.email })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw new Error("There is no user with this email");
                        isEqual = bcrypt_1.default.compare(args.userInput.password, user.password);
                        if (!isEqual)
                            throw new Error("Password does not match!!");
                        token = jsonwebtoken_1.default.sign({ userId: user._id, email: user.email }, 'mysuperTokenlogin', {
                            expiresIn: '1h'
                        });
                        return [2 /*return*/, {
                                userId: user.id,
                                token: token,
                                tokenExpired: 1
                            }];
                }
            });
        }); };
        this.applyForSignup = function (_a) {
            var userInput = _a.userInput;
            return users_1.USER
                .findOne({ email: userInput.email })
                .then(function (user) {
                if (user)
                    throw new Error("user already exists !!!");
                if (userInput.password !== userInput.ConfirmPassword)
                    throw new Error("password doesn't mtach");
                return bcrypt_1.default.hash(userInput.password, 12);
            })
                .then(function (hashPassword) { return __awaiter(_this, void 0, void 0, function () {
                var count, User_1, newUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Counter_1.autoInc()];
                        case 1:
                            count = _a.sent();
                            if (!count) return [3 /*break*/, 3];
                            User_1 = new users_1.USER({
                                email: userInput.email,
                                password: hashPassword,
                                code: count,
                                createdAt: new Date()
                            });
                            return [4 /*yield*/, User_1.save()];
                        case 2:
                            newUser = _a.sent();
                            return [2 /*return*/, newUser];
                        case 3: return [2 /*return*/];
                    }
                });
            }); })
                .then(function (newUser) { return ({
                token: jsonwebtoken_1.default.sign({ userId: newUser._id, email: newUser.email }, 'mysuperTokenlogin', {
                    expiresIn: '1h'
                }),
                tokenExpired: 1
            }); })
                .catch(function (err) { throw err; });
        };
        this.getUserRole = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var user, role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_1.USER.findById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw new Error("User Not Found");
                        role = user.email;
                        return [2 /*return*/, role];
                }
            });
        }); };
        this.verifyAuthById = function (userId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        this.getUserProfile = function (_a) {
            var token = _a.token;
            return __awaiter(_this, void 0, void 0, function () {
                var decodeToken, email, profile;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            decodeToken = jsonwebtoken_1.default.decode(token);
                            if (!decodeToken) return [3 /*break*/, 2];
                            email = decodeToken.email;
                            return [4 /*yield*/, this.findUserByEmail(email, function (r) { return r; })];
                        case 1:
                            profile = _b.sent();
                            if (profile) {
                                return [2 /*return*/, {
                                        _id: profile._id,
                                        email: profile.email,
                                        password: profile.password
                                    }];
                            }
                            else {
                                throw new Error("there is no profile match this user");
                            }
                            return [3 /*break*/, 3];
                        case 2: throw new Error("token not valid");
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        this.findAllUsers = function () {
            return users_1.USER.find()
                .then(function (users) {
                return users.map(function (user) {
                    return __assign(__assign({}, user._doc), { _id: user._doc._id.toString() });
                });
            });
        };
    }
    return User;
}());
exports.userFunc = new User();
exports.default = User;
