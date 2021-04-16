import React, { Component, Fragment } from 'react';
import {
	useParams,
	useLocation
} from 'react-router-dom';

import customRoutesConfig from '../../../router/RoutesConfig.js';



//Might have mismatching versions of React and the renderer (such as React DOM)
function HookScript() {
	
	// The <Route> that rendered this component has a
	// path of `/nested-routes/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	let { topicId } = useParams();
	
	//Click the route to trigger the event
    const theLocation = useLocation();
    React.useEffect(() => {
		console.log( 'topicId: ', topicId );
		
    });
	
	return (
		<></>
	)

}


function HookTopicId() {
	
	
	// The <Route> that rendered this component has a
	// path of `/nested-routes/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	let { topicId } = useParams();
  
  	return topicId;
}


//---
class NestedRoutesDetail extends Component {

  render() {
	
	return (
		<Fragment>
		
		    <HookScript />
		
			<p>Detail topicId: <span style={{background:"yellow",padding:"5px"}}><HookTopicId /></span></p>
		</Fragment>
	)  
	  
	  
  }
    
}

export default NestedRoutesDetail;
