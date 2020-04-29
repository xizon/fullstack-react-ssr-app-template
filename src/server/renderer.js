import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/router/routes';


//As we can not use BrowserRouter on server side, we will use StaticRouter . 
//Also we have same set up as frontend, but wrap it all by renderToString function 
//from react-dom/server library.
export default (pathname, store, context, template) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={pathname} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    if ( template != null && template != '' && typeof template != typeof undefined ) {
        template = template.replace('{{reactApp}}', content )
                           .replace('{{preloadedState}}', JSON.stringify(store.getState()) );  
    }

   
    return template;


};