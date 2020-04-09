import React, { Fragment } from 'react';

export default ({ staticContext = {} }) => {
    staticContext.status = 200;
    
    return (
	  <Fragment>
		
            <div className="content">
                <h1>Todos!</h1>
            </div>
       
        
      </Fragment>
    );
};
