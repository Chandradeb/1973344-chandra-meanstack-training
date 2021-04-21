let app = require('express')();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let methodOverride = require("method-override");
let port = 9090;
let url = 'mongodb://localhost:27017/meanstack';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(url, mongooseDbOption);

mongoose.connection;

var courseRouter = require("./Backend/router/course.router.js");

app.use("/",courseRouter);

app.listen(port, () => console.log('Server running on port number: ' + port));