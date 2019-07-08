import React from 'react'
import {connect} from 'react-redux'
import {countUp, countDown, increaseByTwo} from '../redux/action/counter'

class Counter extends React.Component{

    handleUpCount = () => {
        // dispatching an action to the store
        this.props.dispatch(countUp())
    }

    handleDownCount = () => {
        if(this.props.counter > 0){
            // dispatching an action to the store
            this.props.dispatch(countDown())
        } 
    }

    handleUpByTwo = () => {
        // dispatching an action to the store
        this.props.dispatch(increaseByTwo())
    }

    render(){
        return(
            <div>
                <h2>{this.props.counter}</h2>
                <button className="btn btn-primary" onClick={this.handleUpCount}>Up</button>{' '}
                <button className="btn btn-primary" onClick={this.handleDownCount}>Down</button>{' '}
                <button className="btn btn-primary" onClick={this.handleUpByTwo}>increase by 2 </button>
            </div>
        )
    }
    
}

//mapStateToProps is higher order component 
//used for selecting the part of the data from the store that the connected component needs
const mapStateToProps = (state) => {
        return {
            counter : state.counter
        }
}

// connect is used to connect the store and the component 
//connect() function returns a higher-order component which can be used to wrap any React component

export default connect(mapStateToProps)(Counter)