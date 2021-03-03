import React,{ useContext} from 'react'
import Counter from "./counter"
import counterContext from "./counterContext"

export default function Counters() {

  const counters =  useContext(counterContext)

  const handleReset = () => {
    const reset = counters[0].map((c) => {
      c.value = 0;
      return c;
    });
    
  };

   return (
    <div>
      <button  className="btn btn-primary btn-sm m-2" onClick={()=>{handleReset()}}>Reset</button>
      {counters[0].map(counter=><Counter  key={counter.id} value={counter.value} counter={counter} id={counter.id} ></Counter>)}  
       
    </div>
)
}
   
 
    
