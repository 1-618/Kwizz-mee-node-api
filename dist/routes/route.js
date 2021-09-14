"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
//Importing the dependencies we will need for this module
var express_1 = __importDefault(require("express"));
var trivia_endpoint_1 = __importDefault(require("../controllers/trivia-endpoint"));
//instantiating an express router object
var triviaRouter = express_1.default.Router();
//performing a request to an endpoint on this route
triviaRouter.get('/trivia/:amount&:difficulty&:type', trivia_endpoint_1.default);
module.exports = triviaRouter;
