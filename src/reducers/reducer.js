

const initialState={
    name:"camelot"
};

function rootReducer(state=initialState, action){
    switch(action.type){
        case"ON_CHANGE":
        console.log(action)
        state.name="asdada"
        return{
            name:state.name
        }
        default:
        return state
    }
}

export default rootReducer;