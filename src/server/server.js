import express from 'express';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
import render from './renderer';
import Routes from '../client/router/routes';
import store from '../store/createStore';

//
import compression from 'compression';

//
import fs from 'fs';
import path from 'path';

/*
A babel/register style hook to ignore style imports when running in Node. 
This is for projects that use something like Webpack to enable CSS imports in JavaScript. 
When you try to run the project in Node (to test in Mocha, for example) you'll see errors like this:

SyntaxError: ../??.sass: Unexpected token

To resolve this, require ignore-styles with your mocha tests:

mocha --require ignore-styles
*/


// Server var
const port = process.env.port || 3000;
const app = express();

// Middleware
function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}

app.use(
  compression({
    level: 2, // set compression level from 1 to 9 (6 by default)
    filter: shouldCompress // set predicate to determine whether to compress
  })
);

app.use(express.static( '/dist' ));




// Serving static files in Express
//console.log(__dirname);
app.use('/', express.static( 'public' ));
app.use('/dist', express.static( 'dist' ));


// use it before all route definitions
const cors = require('cors');
app.use(cors({origin: '*' }));



app.get('*', async (req, res) => {

  const params = req.params[0].split('/');
  const id = params[2];
    

  // Checks the given path, matches with component and returns array of items about to be rendered
  const routes = matchRoutes(Routes, req.path);

  // Execute all loadData functions inside given urls and wrap promises with new promises to be able to render pages all the time
  // Even if we get an error while loading data, we will still attempt to render page.
  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, id) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
      return null;
    });
    
    
    //read template
    const indexFile = path.join(__dirname,'../../public/index.html');
    promises.push(new Promise(function(resolve, reject){
        fs.readFile(indexFile, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }));
    

  // Wait for all the loadData functions, if they are resolved, send the rendered html to browser.
  Promise.all(promises).then(( data ) => {
    const templateCode = data[1];
    const context = {};
    const content = render(req.path, store, context, templateCode);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
    

});

app.listen(port, () => console.log(`Frontend service listening on port: ${port}`));

