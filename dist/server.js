"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importing the dependencies we will need for this module
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var route_1 = __importDefault(require("./routes/route"));
var morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
//Instantiate an express application by calling the express function
var app = (0, express_1.default)();
app.use((0, morgan_1.default)("tiny"));
app.use(route_1.default);
//Parse the body of the request
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//Handle errors
app.use(function (req, res, next) {
    var error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
//listen for requests to our server
app.listen(process.env.PORT);
