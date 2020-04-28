import axios from 'axios';

export const fetchDemoList = () => {
    
    return async (dispatch) => {

        dispatch({ type: 'REQUEST_DEMO_LIST' });
        
        const res = await axios.get( `/assets/json/modules.json` );
        dispatch({ type: 'RECEIVE_DEMO_LIST', payload: res.data });
        
    }
}
