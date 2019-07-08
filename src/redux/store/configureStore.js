import { createStore, combineReducers } from 'redux'
import counterReducer from '../reducer/counter'

// configuring the store 
//Store is an object which holds the state of an entire application

const configureStore = () => {
    // combineReducers is used when you have more than one reducer
    const store = createStore(combineReducers({
        counter : counterReducer
    }))

    return store
}

export default configureStore