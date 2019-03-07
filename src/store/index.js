import {createStore,applyMiddleware, combineReducers} from "redux";
import reducer from "../reducers/reducer"
import adminReducer from "../reducers/admin"
import mainReducer from "../reducers"
import rootSaga from "../sagas/adminSaga"
import createSagaMiddleware from "redux-saga";

const sagaMiddleware= createSagaMiddleware();

// const rootReducer = combineReducers({
//     reducer:reducer,
//     admin:adminReducer
// })
const middlewares = applyMiddleware(sagaMiddleware)
const store = createStore(mainReducer,middlewares);
sagaMiddleware.run(rootSaga);
export default store; 