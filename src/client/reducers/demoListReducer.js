//initialize state
const initialState = {
    items: null,
    isFetching: false
};

const demoListReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'REQUEST_DEMO_LIST': {
          return { ...state, isFetching: true };
        }
        case 'RECEIVE_DEMO_LIST': {
          return { ...state, isFetching: false, items: action.payload };
        }   
            
        default:
            return state;
    }
};
export default demoListReducer;