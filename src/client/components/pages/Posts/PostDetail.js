import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { fetchDemoListDetail } from '../../../actions/demoListDetailActions';


class PostDetail extends Component {
	constructor(props) {

		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		//console.log(this.props) //props will get logged.


   
	}

    static fetching ({ dispatch, path }) {
        let currentID = path.split( '/' ).pop();
        return [ dispatch( fetchDemoListDetail( currentID ) ) ];
    }
    

    /**
     * componentDidMount() is invoked immediately after a component 
     * is mounted (inserted into the tree). 
     * Initialization that requires DOM nodes should go here. 
     * If you need to load data from a remote endpoint, this 
     * is a good place to instantiate the network request.
     */
    componentDidMount() {

        // Request data
        this.props.dispatch(fetchDemoListDetail( this.props.match.params.post_id ));
        
    }


  render() {
    // Bind data and display
    const preloadedState = this.props.currentData;
 
    if ( preloadedState == null ) {
        console.log( 'preloadedState: null' );
    } else {
        console.log( 'preloadedState: Return an Array' );
    }
    
    return (
	  <Fragment>
   
            <div className="content">
                { 
                ( preloadedState != null ) ? preloadedState.map((item, i) => 
                                                                
                      <div key={"detail"+i} style={{padding: "15px", margin: "10px", display: "inline-block", border: "1px solid #ddd", width: "420px", textAlign: "left", position: "relative"}}>
                        
                            <img src={item.flag} alt="" style={{width: "400px", display: "inline-block" }} />
                            <hr />
                            <p><strong>Name: </strong>{item.name}</p>
                            <p><strong>Capital: </strong>{item.Capital}</p>
                            <p><strong>Population: </strong>{item.population}</p>
                            <p><strong>Subregion: </strong>{item.subregion}</p>
                            <p><strong>Languages: </strong></p>   
                            <div>
                                {item.languages.map((lanItem, k) => <span key={"lan"+k}>{lanItem.name}</span>)}
                            </div>
                                                               
                      </div>  )
                 : ""
                }
        
            </div>
       
          
      </Fragment>

    );
  }

}

    
// Subscribe to the required state in the reducers is bound 
// here (for details of the data structure: initState)
const mapStateToProps = (state) => {
    return {
        currentData: state.listDetailData.detail
    }
};

// Bind the introduced Actions
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};


// The most important step is to bind the required Reducer and Actions to the current page 
// through the connect function provided by react-redux

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PostDetail);


