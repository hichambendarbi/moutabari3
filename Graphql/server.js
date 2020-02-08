var express = require('./node_modules/express')
var app = express();
var bodyParser = require('./node_modules/body-parser');

app.use((req, res, next) => {
    next();
});

app.use(bodyParser.json());
app.use('/', routes(express.Router()));


app.listen(8080);