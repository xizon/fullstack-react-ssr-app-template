import React, { Component, Fragment } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Actions from '../../../actions';


class Posts extends Component {

	constructor(props) {

		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		//console.log(this.props) //props will get logged.

		
   
	}

    

    /**
     * componentDidMount() is invoked immediately after a component 
     * is mounted (inserted into the tree). 
     * Initialization that requires DOM nodes should go here. 
     * If you need to load data from a remote endpoint, this 
     * is a good place to instantiate the network request.
     */
    componentDidMount() {
        //do shmething
        
        // Request data
        this.props.action.fetchDemoList();

    }


  render() {
    // Bind data and display
    const preloadedState = this.props.listData;
      
      console.log( 'preloadedState: ' );
      console.log( preloadedState );
      
    return (
	  <Fragment>
		
            <div className="content">
              <ul>
                <li>Default Item</li>
                { 
                ( preloadedState != null ) ? preloadedState.map(item => 
                         <li key={item.taskID}>
                             {item.taskID}
                         </li>)
                 : ""
                }
              </ul>
            </div>
       
          
      </Fragment>

    );
  }

}

// Subscribe to the required state in the `reducers/index.js`, `reducers/demoList` is bound 
// here (for details of the data structure: initState)
const mapStateToProps = (state) => {
    
    return {
        listData: state.listData.items,
        listDetailData: state.listDetailData.detail
    }
};

// Bind the introduced Actions
const mapDispatchToProps = (dispatch) => {
    return {
        action: bindActionCreators(Actions, dispatch)
    }
};

// The most important step is to bind the required Reducer and Actions to the current page 
// through the connect function provided by react-redux

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Posts);


