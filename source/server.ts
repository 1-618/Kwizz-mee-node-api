//Importing the dependencies we will need for this module
import express from 'express';
import config from './config/config';
import triviaRouter from "./routes/route";
import morgan from 'morgan'


//Instantiate an express application by calling the express function
const app = express();
app.use(morgan("tiny"))

app.use(triviaRouter)
//Parse the body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handle errors
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

//listen for requests to our server
app.listen(config.server);
