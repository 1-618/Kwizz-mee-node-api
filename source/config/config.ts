//Import dependencies needed for this module
import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.PORT || 8083;


const config = {
    server: SERVER_PORT,
    host: SERVER_HOSTNAME
};

export default config;
