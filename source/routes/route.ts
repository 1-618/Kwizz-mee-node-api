//Importing the dependencies we will need for this module
import express from 'express';
import triviaEndpoint from '../controllers/trivia-endpoint';

//instantiating an express router object
const triviaRouter = express.Router();

//performing a request to an endpoint on this route
triviaRouter.get('/trivia/:amount&:difficulty&:type', triviaEndpoint)

export = triviaRouter;

