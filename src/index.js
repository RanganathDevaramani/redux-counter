import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './redux/store/configureStore'
import { Provider } from 'react-redux'



const store = configureStore()

// subscribe method gets called everytime when the state in the store changes
store.subscribe(() => {

    // getState() is used to get the current value of the state
    console.log(store.getState())
})

//The entire application is wrapped inside the <Provider/>
const jsx = (
    //bind the store 
    <Provider store = {store}>  
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

