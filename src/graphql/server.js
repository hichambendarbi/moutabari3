var express = require('./node_modules/express')
var app = express();
var bodyParser = require('./node_modules/body-parser');
var routes = require('./routes');

app.use((req, res, next) => {
    next();
});

app.use(bodyParser.json());
app.use('/', routes(express.Router()));


app.listen(8000, () => {
    console.log(`application listening on port : ${8000}`)
})