import React, { Fragment } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	Redirect,
	useLocation
} from 'react-router-dom';
import customRoutesConfig from './RoutesConfig.js';


export default (props) => {
    
	//Click the route to trigger the event
    const theLocation = useLocation();
    React.useEffect(() => {
		console.log( 'theLocation(): ', theLocation );
		
		//create a style element and append to head
		const $style = document.createElement("style");
		document.head.appendChild($style);
		$style.innerHTML = `
			nav {
				display: block;
				margin-bottom: 50px;
			}

			nav ul {
				list-style: none;
			}

			nav li {
				float: left;
				padding: 1rem 2rem;
			}

			nav li a {
				color: #2075EF;
				text-decoration: none;
				font-size: 16px;
				text-transform: uppercase;
				border: 1px solid rgba(0, 0, 0, 0);
				padding: 0.5rem 1rem;
			}

			nav li a.active {
				background: #F7F6F0;
				border: 1px solid #EFE4E5;
				padding: 0.5rem 1rem;
			}

			nav::after {
				content: "";
				display: block;
				clear: both;
			}

			.content {
				display: block;
				padding: 15px;
				background: #F7F6F0;
				border: 1px solid #EFE4E5;
				box-shadow: 0px 10px 5px -12px rgb(0 0 0 / 21%);
				margin: 10px 70px;
				border-radius: 15px;
			}`;

	
    });
	
	
    return (
	  <Fragment>
          <nav>
              <ul>
				<li className={props.location.pathname === '/index' || props.location.pathname === '' ? 'active' : ''}>
				  <NavLink to="/index" activeClassName="active">Home</NavLink>
				</li>
				<li className={props.location.pathname === '/todos' ? 'active' : ''}>
				  <NavLink to="/todos" activeClassName="active">Todos</NavLink>
				</li>
				<li className={props.location.pathname.indexOf( '/posts' ) >= 0 ? 'active' : ''}>
				  <NavLink to="/posts" activeClassName="active">Posts</NavLink>
				</li>
				<li className={props.location.pathname === '/errorpage' ? 'active' : ''}>
				  <NavLink to="/errorpage" activeClassName="active">404</NavLink>
				</li>
				<li className={props.location.pathname.indexOf( '/nested-routes' ) >= 0 ? 'active' : ''}>
				  <NavLink to="/nested-routes" activeClassName="active">Nested Routes</NavLink>
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

		      {/* Set React Router Default Route Redirect to `/index` */}
              <Route
                exact
                path="/"
                render={(props) => {
                    return (
                      <Redirect to="/index" />
                    )
                }}
              />


              {/* Loop through an array to create routes in react router` */}
			  {
				customRoutesConfig[0].routes.map((item,index) => {
					
					return (
					  <Route
						key={index}
						path={item.path}
						exact={item.exact}
						component={item.component}
					  />
					);	

				})
		   	  }

          </Switch>




      </Fragment>
    );

};