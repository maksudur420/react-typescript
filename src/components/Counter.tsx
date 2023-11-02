import { ReactNode, useState } from 'react'

type ChildrenType ={
  children : (num:number)=>ReactNode
}

const Counter = ({children}:ChildrenType) => {
    const[count,setCount]=useState<number>(1)
  return (
    <div>
        <h3>{children(count)}</h3>
        <button onClick={()=>setCount(prev=>prev+1)}>+</button>
        <button onClick={()=>setCount(prev=>prev-1)}>-</button>
    </div>
  )
}

export default Counter
