import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import workers from './workers'

export default history => combineReducers({
    workers,
    router: connectRouter(history)
})