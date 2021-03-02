import React,{ useContext} from 'react'
import Counter from "./counter"
import counterContext from "./counterContext"

export default function Counters() {

  const counters =  useContext(counterContext)

  const handleReset = () => {
    const reset = counters.map((c) => {
      c.value = 0;
      return c;
    });
    
  };

   return (
    <div>
      <button  className="btn btn-primary btn-sm m-2" onClick={()=>{console.log(counters)}}>Reset</button>
      {counters.map(counter=><Counter  key={counter.id} value={counter.value}></Counter>)}  
       
    </div>
)
}
   
 
    
