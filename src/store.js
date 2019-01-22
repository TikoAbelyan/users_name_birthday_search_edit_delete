import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer';


export default createStore(
    combineReducers({
        state: rootReducer
    }),
    applyMiddleware(promise,logger,thunk)
)