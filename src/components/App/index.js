import React, { Fragment } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Todos from './Todos';

import './styles.scss';

export default props => {
    
    return (
	  <Fragment>
          <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/todos">Todos</NavLink>
                </li>
                <li>
                  <NavLink to="/posts">Posts</NavLink>
                </li>
              </ul>

          </nav>

        
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. 
                The express configuration associated with the file webpack.config.js
            */}
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} />}
            />
            <Route path="/index" component={Home} />
            <Route path="/todos" component={Todos} />
            <Route path="/posts" component={Posts} />
          </Switch>
      </Fragment>
    );

};