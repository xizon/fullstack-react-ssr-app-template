import axios from 'axios';

export const fetchDemoListDetail = ( id ) => {
    
    return async (dispatch) => {
        
        const res = await axios.get( `https://restcountries.eu/rest/v2/name/${id}` );
        dispatch({ type: 'RECEIVE_DEMO_LISTDETAIL', payload: res.data });   

    }
}
