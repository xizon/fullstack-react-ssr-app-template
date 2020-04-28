import axios from 'axios';

export const fetchDemoListDetail = ( id ) => {
    
    return async (dispatch) => {
        
        dispatch({ type: 'REQUEST_DEMO_LISTDETAIL' });
        
        const res = await axios.get( `/assets/json/your_api_url?id=${id}` );
        dispatch({ type: 'RECEIVE_DEMO_LISTDETAIL', payload: res.data });   

    }
}
