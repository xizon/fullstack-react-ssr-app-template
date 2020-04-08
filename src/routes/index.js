import express from 'express';
import path from 'path';
import axios from 'axios';
const router = express.Router();



// Serving static files in Express
//console.log(__dirname);
router.use('/', express.static( 'public' ));
router.use('/dist', express.static( 'dist' ));


//Fixing the "cannot GET /URL" error on refresh with React Router 
//and Reach Router (or how client side routers work)
import fs from 'fs';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../components/App';
import { StaticRouter } from 'react-router-dom';;

import Routes from './routes.js';


if (typeof window === 'undefined') {
    global.window = {};
}


router.get('/*', async (req, res) => {

    
    let curRoute = '';
    Routes.map( ( route ) => {
        
        if ( route.path == req.url ) {
            
            curRoute = route.path;
      

            axios
                .get(`/assets/json/modules.json`, { proxy: { host: 'localhost', port: 3000 } })
                .then(ajaxRes => {
                
                    window.__PRELOADED_STATE__ = ajaxRes.data;


                    // Let's add the data to the context
                    const state = JSON.stringify( ajaxRes.data );
                    const context = {};
                    const template = renderToString(
                        <StaticRouter location={req.url} context={context}>
                            <App />
                        </StaticRouter>
                    );

                    const indexFile = path.join(__dirname,'../../public/index.ejs');
                    fs.readFile(indexFile, 'utf8', (err, data) => {

                        if (err) {
                            console.error('Something went wrong:', err);
                            return res.status(500).send('Oops, better luck next time!');
                        }

                        res.status(200).render('index', {reactApp: template, preloadedState: state});

                    });
                
                });
 
            

            
        }
    });
    
    // 404 Error
    if ( curRoute == '') {
        res.setHeader('Content-Type', 'text/html');
        res.write('Route not found or missing resource.');
        res.end('');  
    }

});



export default router;



