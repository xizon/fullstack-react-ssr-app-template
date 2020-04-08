import React, { Component, Fragment } from 'react';
import axios from 'axios';


class Posts extends Component {
	constructor(props) {

		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		//console.log(this.props) //props will get logged.

		
		//init data
		this.state = {
			persons: []
		}

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
        axios
            .get(`/assets/json/modules.json`)
            .then(res => {
                const persons = res.data;
                console.log(persons);
                this.setState({ persons });
            });



    }


  render() {
    const { persons } = this.state;

    return (
	  <Fragment>
		
            <div className="content">
              <ul>
                <li>Default Item</li>
                { persons.map(item => 
                 <li>
                     {item.taskID}
                 </li>)}
              </ul>
            </div>
       
          
      </Fragment>

    );
  }
    
}

export default Posts;