//Importing the dependencies we will need for this module
import express from 'express';
import dotenv from 'dotenv'
import triviaRouter from "./routes/route";
import morgan from 'morgan'
dotenv.config()

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
const port = process.env.PORT || 8084
//listen for requests to our server
app.listen(port, () => `listening on port ${port}`);
