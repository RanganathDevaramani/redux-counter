
// when the button in the componet is clicked, action is generated 
// these actions are the plain objects( payload of information ) which has types and the payload

// Increase the counter by 1
export const countUp =() => {
    return {
      type : "COUNT_UP"
    }
}

// decrease the counter by 1
export const countDown = () => {
    return {
      type : "COUNT_DOWN"
    }
}

// increase the counter by 2
export const increaseByTwo = (num=2) => {
  return {
    type : "INC_TWO",
    payload : num
  }
}

// Note : countUp, countDown and increaseByTwo are the named exports
// import named exports like,
// import { countUp , countDown, increaseByTwo } from './redux/actions/action'
