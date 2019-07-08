
// Reducers are the pure javascript functions which takes state and an action as an argument
// reducer will check the actions whether it is there or not, if it is not there it will take default state value

const counterReducer = ( state = 0, action) => {
    switch(action.type){
        case "COUNT_UP" : 
            return state + 1
        case "COUNT_DOWN" : 
            return state - 1
        case "INC_TWO" : 
            return state + action.payload
        default : 
            return state
    }
}

export default counterReducer