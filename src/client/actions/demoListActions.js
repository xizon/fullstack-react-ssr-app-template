import axios from 'axios';

export const fetchDemoList = () => {
    
    return async (dispatch) => {

        const res = await axios.get( `https://restcountries.eu/rest/v2` );
        dispatch({ type: 'RECEIVE_DEMO_LIST', payload: res.data });
        
    }
}
