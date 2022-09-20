
//third-party modules
import express from 'express';
import logger from 'morgan';
import session from 'express-session';

//es modules fix for __dirname 
import path, { dirname } from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


//Import Routes
import indexRouter from './app/routes/index.route.server.js';

//Start express application
const app = express();

//set up Middlewares

//setup ViewEngine ejs
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client')));
app.use(session({
    secret:'MySecret',
    saveUninitialized:false,
    resave:false
}));

//use routes
app.listen(3000);