import axios from 'axios';

const actionCreators = () => {
    
	// The function defined by async will return the value of a `Promise()` object resolve by default, 
	// so the `then()` can be used directly, and the returned value is the params of the `then()`
    return async (storeDispatch) => {

        const res = await axios.get( `https://restcountries.eu/rest/v2` );
		//const res = await axios.get( `../../assets/json/Posts.json` );
		
		
		//The Redux store has a method called `store.dispatch()`.
		const action = {
			type: 'RECEIVE_DEMO_LIST',
			payload: res.data
		}

        storeDispatch(action);
        
    }
}

export default actionCreators;