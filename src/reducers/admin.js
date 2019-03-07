import constants from "../constants/constants"

const initialState={
    loading:false,
};

function adminReducer(state=initialState, action){ 
    console.log("reducer")
    switch(action.type){
        case constants.FETCH_USERS:
        return{
            loading:true
        }
        case constants.FETCH_USERS_SUCCESS:
        return{
            data:action.payload
        }
        default:
        return state
    }
}

export default adminReducer;