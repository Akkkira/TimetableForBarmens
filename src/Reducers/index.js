import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import workers from './workers'

const createRootReducer = history => combineReducers({
    workers,
    router: connectRouter(history)
});

export default createRootReducer;