import React from 'react'
import Counter from "./counter"

export default function Counters(props) {

   return (
    <div>
      <button  className="btn btn-primary btn-sm m-2" onClick={()=>{props.onReset()}}>Reset</button>
      {props.counters.map(counter=><Counter counter={counter} key={counter.id} value={counter.value} counter={counter} id={counter.id} onDelete={()=>props.onDelete()} onIncreament={()=>props.onIncreament()} onDecreament={()=>props.onDecreament()}></Counter>)}  
       
    </div>
)
}
   
 
    
