import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc } from './slice/counter.slice';

export default function Counter() {

   const counter= useSelector(y=>y.counter);

   const dis = useDispatch();

   const increment = ()=>{

    dis(inc());
   }

   const decrement = ()=>{
    dis(inc());
   }
  return (
    <div>{counter.counter}
    
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
