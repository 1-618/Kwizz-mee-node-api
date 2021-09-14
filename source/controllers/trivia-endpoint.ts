//Import dependencies needed for this module
import { NextFunction, Request, Response } from 'express';
import axios from 'axios'

//Function that calls the opentdb api
const triviaEndpoint = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params)
    const amount = req.params.amount
    const difficulty = req.params.difficulty
    console.log(req.params)
    console.log(amount, difficulty)
         try {
             const Q = await axios.get(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
             console.log(Q.data)
             return res.send( {info: Q.data})
         } catch (error) {
             console.log(error)
         }
}

export default triviaEndpoint;

