import admin from "./admin";
import reducer from "./reducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    reducer:reducer,
    admin:admin
})

export default rootReducer