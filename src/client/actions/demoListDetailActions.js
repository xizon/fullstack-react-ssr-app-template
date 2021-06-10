import axios from 'axios';

export const fetchDemoListDetail = ( id ) => {
    
    return async (dispatchingAction) => {
        
        const res = await axios.get( `https://restcountries.eu/rest/v2/name/${id}` );
		//const res = await axios.get( `../../assets/json/PostDetail.json` );
		
		//The Redux store has a method called `store.dispatch()`.
		//@https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
        dispatchingAction({ type: 'RECEIVE_DEMO_LISTDETAIL', payload: res.data });   

    }
}
