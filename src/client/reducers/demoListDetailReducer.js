//initialize state
const initialState = {
    isFetching: false,
    detail: {
        "id": "",
        "name": ""
    }
};

const demoListDetailReducer = (state = initialState, action) => {
    switch (action.type) {
   
        case 'REQUEST_DEMO_LISTDETAIL': {
          return { ...state, isFetching: true };
        }
        case 'RECEIVE_DEMO_LISTDETAIL': {
          return { ...state, isFetching: false, detail: action.payload };
        }       
            
        default:
            return state;
    }
};
export default demoListDetailReducer;
