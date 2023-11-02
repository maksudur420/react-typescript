import { ReactNode } from 'react'
import { useCounter, useTextHook } from '../context/CounterContext'

type ChildrenType ={
  children : (num:number)=>ReactNode
}

// const enum REDUCER_ACTION_TYPE{
//     INCREMENT,
//     DECREMENT,
//     NEW_INPUT,

// }

// type ReducerAction ={
//     type:REDUCER_ACTION_TYPE,
//     payload?: string
// }

// const initState ={
//     count: 0,
//     text :''
// }

// const reducer =(state: typeof initState, action:ReducerAction):typeof initState=>{
//     switch(action.type){
//         case REDUCER_ACTION_TYPE.INCREMENT:
//             return{...state, count: state.count +1}
//         case REDUCER_ACTION_TYPE.DECREMENT:
//             return{...state, count: state.count -1}
//         case REDUCER_ACTION_TYPE.NEW_INPUT:
//             return{...state, text: action.payload?? ""}
//         default:
//             throw new Error()
//     }
// }
const CountReducer = ({children}:ChildrenType) => {
   const {count,increment,decrement}=useCounter()
   const {text,handleInput} =useTextHook()
  return (
    <div>
        <h3>{children(count)}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button><br/>
        <input type="text" name="" id="" onChange={handleInput} />
        <h3>{text}</h3>
    </div>
  )
}

export default CountReducer
