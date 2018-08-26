import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import counterReducer from './reducer/reducer';
import {bonusMiddleware} from './middleware/middleware';

let reducers = combineReducers({
    counterReducer
});

let initialState = {
    counterReducer: {
        count: 0
    }
};

const store = createStore(reducers,initialState,applyMiddleware(thunk,bonusMiddleware));
export default store;