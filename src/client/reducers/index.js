import {combineReducers} from 'redux';
import demoListReducer from './demoListReducer';
import demoListDetailReducer from './demoListDetailReducer';

export default combineReducers({
    listData: demoListReducer,
    listDetailData: demoListDetailReducer
});