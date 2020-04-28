import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../client/reducers';
import reduxThunk from 'redux-thunk';

export default createStore(rootReducer, {}, applyMiddleware(reduxThunk));