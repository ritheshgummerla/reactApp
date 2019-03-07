import {all, call,takeLatest,put} from "redux-saga/effects";
import constants from "../constants/constants";
import services from "../services"


function* fetchUsers(){       
    console.log("saga")
    const response = yield call(services.findUsers) 
   yield put({type:constants.FETCH_USERS_SUCCESS, payload:response})
}

export default function* rootSaga(){
    yield all([
        takeLatest(constants.FETCH_USERS, fetchUsers)
    ]);
}