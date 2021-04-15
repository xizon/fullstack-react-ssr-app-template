import React, { Fragment } from 'react';
import {
	useParams,
	useLocation
} from "react-router-dom";

import customRoutesConfig from '../../../router/RoutesConfig.js';


/* Convert Allowance class component to functional component */ 
const NestedRoutesDetail = () => {

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
		<Fragment>
			<p>Detail topicId: <span style={{background:"yellow",padding:"5px"}}>{topicId}</span></p>
		</Fragment>
	)
};

export default NestedRoutesDetail;

