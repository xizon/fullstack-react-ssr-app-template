import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import actionCreators from '../../../actions/demoListActions.js';
import PostItem from './PostItem.js';
         
class Posts extends Component {

	constructor(props) {

		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		//console.log(this.props) //props will get logged.

   
	}
    
	//Static properties/methords are the properties of the class. 
	//@link to: `src/server/app.js`
	/*
	 * When requesting from the server, the program will look for the react component with 
	 * the `appSyncRequestFetching` function (this function is named by the developer) to complete the 
	 * initial update and rendering of the data(SSR).
	 
		if ( typeof route.component.appSyncRequestFetching !== typeof undefined ) {
			//...
		}	
	
	*/
	
	/*
	Dispatch an async function. The `redux-thunk` middleware handles running this function.
	Implementation principle:
	(put the following code in the app.get('*', (req, res) => {...} code snippet in `src/server/app.js`):
	
	-------------------

	store.dispatch(async function(dispatch) {

		// Wait for all the `httpRequest` functions, if they are resolved, run 'store.dispatch()'
		const httpRequest = () => {
			return new Promise( (resolve,reject) => {
				axios({
					timeout: 15000,
					method: 'get',
					url: `https://restcountries.com/v2/all`,
					responseType: 'json'
				}).then(function (response) {
					resolve( response );
				})
				.catch(function (error) {
					console.log( error );
				});
			});
		};


		const getApiData = await httpRequest();
		const action = {
			type: 'RECEIVE_DEMO_LIST',
			payload: getApiData.data
		}
		dispatch( action );



		// Send the rendered html to browser.
		const indexFile = path.join(__dirname,'../../public/index.html');
		fs.readFile(indexFile, 'utf8', (err, data) => {
			if (err) {
				console.error('Something went wrong:', err);
				return res.status(500).send('Oops, better luck next time!');
			} 

			//
			const context = {};
			const content = render(req.path, store, context, data);

			if (context.notFound) {
				res.status(404);
			}

			res.send(content);
		});

	});

	
	*/
    static appSyncRequestFetching( storeAPI ) {
		const AppDispatch = storeAPI.dispatch;
		
		//
		const data = actionCreators();
		return [ AppDispatch(data) ];
    } 


    componentDidMount() {
   
		//Receive redux from the parent page
		console.log('[posts list]this.props:' );
		console.log(this.props);
		
		const { contentInformation } = this.props;

		//from `mapDispatchToProps()`
        this.props.actionCreators();
   
        
    }


  render() {
    
	//from `mapStateToProps()`
    const preloadedState = this.props.currentData;
	  
	//loader
	let isLoaded = false;

    if ( preloadedState == null ) {
        console.log( 'preloadedState: null' );
    } else {
        console.log( 'preloadedState: Return an Array' );
		isLoaded = true;
    }
    
    return (
	  <Fragment>
   
            <div className="content">
		

				{ isLoaded ? (

				  ( preloadedState != null ) ? preloadedState.map((item, i) => <PostItem key={i} {...item} />) : ""

				) : (
				  <div>Loading...</div>
				)}

            </div>
       
          
      </Fragment>

    );
  }

}

    
// Subscribe to the required state in the reducers is bound here (for details of the data structure: initState)
// You can call it in `this.props`
const mapStateToProps = (state) => {
	const { listData } = state; //Receive redux

    return {
        currentData: listData.items  
    }
};

// Bind the introduced Actions. You will normally make use of this by returning new functions that call `dispatch()` inside themselves
// You can call it in `this.props`
/*
Like this:
const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: 'INCREMENT' }),
		decrement: () => dispatch({ type: 'DECREMENT' }),
	}
}
*/
const mapDispatchToProps = {
	actionCreators
}



// The most important step is to bind the required Reducer and Actions to the current page 
// through the connect function provided by react-redux

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Posts);


