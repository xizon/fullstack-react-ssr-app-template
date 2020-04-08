import express from 'express';
import compression from 'compression';
import router from './routes/index';
import path from 'path';

// Server var
const app = express();
const port = process.env.PORT || 3000;

// View engine setup
// Implementing Server Side Rendering using React and Express
//console.log(__dirname);
app.set('views', path.join(__dirname,'../public'));
app.set('view engine', 'ejs');


// Middleware
app.use(compression());
app.use(express.static( '/dist' ));

// SSR for homepage
app.use('/', function(req, res, next){
    if ( '/' == req.url ) {
        req.url = '/index';  
    }
    next();
});



// Routes
app.use('/', router);



// Add listen handler
app.listen(port, function listenHandler() {
    console.info(`Running on ${port}`)
});



/*
A babel/register style hook to ignore style imports when running in Node. 
This is for projects that use something like Webpack to enable CSS imports in JavaScript. 
When you try to run the project in Node (to test in Mocha, for example) you'll see errors like this:

SyntaxError: ../??.sass: Unexpected token

To resolve this, require ignore-styles with your mocha tests:

mocha --require ignore-styles
*/