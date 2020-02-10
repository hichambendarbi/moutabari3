"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var body_parser_1 = __importDefault(require("body-parser"));
/**
 * Add your local mongodb or add atlas your atlas mongo
 */
// const uri = "";
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
//     .then(() => { console.log('MongoDB connected...') })
//     .catch((err: any) => console.log(err));
// mongoose.set('useCreateIndex', true);
var app = express_1.default();
app.use(body_parser_1.default.json());
// app.use(cookieParse())
/**
 * Accept other
 *  ip to ask api
 **/
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS')
        return res.sendStatus(200);
    next();
});
// app.use(isAuth);
// app.get('/testexpress',(req, res, next)=>{
//     res.send("requete recieved");
//     next()
// })
app.use('/', routes_1.default(express_1.default.Router()));
app.listen(8000, function () {
    console.log("application listening on port : " + 8000);
});
