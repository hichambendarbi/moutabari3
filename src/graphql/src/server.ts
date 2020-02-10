import express from "express";
import routes from './routes';
import bodyParser from "body-parser";
import mongoose from "mongoose";

/**
 * Add your local mongodb or add atlas your atlas mongo
 */

// const uri = "";

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
//     .then(() => { console.log('MongoDB connected...') })
//     .catch((err: any) => console.log(err));

// mongoose.set('useCreateIndex', true);

const app: express.Application = express();

app.use(bodyParser.json());

// app.use(cookieParse())


/** 
 * Accept other
 *  ip to ask api
 **/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

// app.use(isAuth);

// app.get('/testexpress',(req, res, next)=>{
//     res.send("requete recieved");
//     next()
// })

app.use('/', routes(express.Router()));

app.listen(8000, () => {
    console.log(`application listening on port : ${8000}`)
})