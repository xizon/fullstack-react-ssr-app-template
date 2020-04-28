import {combineReducers} from 'redux';

import demoListReducer from './demoListReducer';
import demoListDetailReducer from './demoListDetailReducer';

const appReducer = combineReducers({
    listData: demoListReducer,
    listDetailData: demoListDetailReducer,
});

export default appReducer;