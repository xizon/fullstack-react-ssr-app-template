import React, { Fragment } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	Redirect
} from "react-router-dom";
import Home from '../pages/Home/index.js';
import Posts from '../pages/Posts/index.js';
import PostDetail from '../pages/Posts/PostDetail.js';
import Todos from '../pages/Todos/index.js';
import NoMatchPage from '../pages/404/index.js';


import './styles.scss';


export default props => {
    
    return (
	  <Fragment>
          <nav>
              <ul>
                <li>
                  <NavLink to="/index">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/todos">Todos</NavLink>
                </li>
                <li>
                  <NavLink to="/posts">Posts</NavLink>
                </li>
                <li>
                  <NavLink to="/errorpage">404</NavLink>
                </li>
              </ul>

          </nav>

        
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. 
                The express configuration associated with the file webpack.config.js
            */
			/*
			
			Directly display the content of the homepage component when there is no redirect.

			<Route
			  exact
			  path="/"
			  render={props => <Home {...props} />}
			/>
			*/
		     }
          <Switch>

		      /* Set React Router Default Route Redirect to `/index` */
              <Route
                exact
                path="/"
                render={(props) => {
                    return (
                      <Redirect to="/index" />
                    )
                }}
              />
		
            <Route path="/index" component={Home} />
            <Route path="/todos" component={Todos} />
            <Route path="/posts" component={Posts} />
            <Route path="/post-detail/:post_id" component={PostDetail} />
            <Route component={NoMatchPage} />
          </Switch>
      </Fragment>
    );

};