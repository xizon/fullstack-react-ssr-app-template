import axios from 'axios';

const actionCreators = (id) => {
    
	// The function defined by async will return the value of a `Promise()` object resolve by default, 
	// so the `then()` can be used directly, and the returned value is the params of the `then()`
    return async (dispatchFunction) => {

        const res = await axios.get( `https://restcountries.com/v2/name/${id}` );
		//const res = await axios.get( `../../assets/json/Posts.json` );
		
		
		//The Redux store has a method called `store.dispatch()`.
		const action = {
			type: 'RECEIVE_DEMO_LISTDETAIL',
			payload: res.data
		}

        dispatchFunction(action);
        
    }
}

export default actionCreators;
