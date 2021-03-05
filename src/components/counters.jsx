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
    counters[1](reset) 
    
  }

   return (
    <div className="col-sm-12">
     
      <button  className="btn btn-primary btn-sm m-2" onClick={()=>{ handleReset()}}>Reset</button>
    
      {counters[0].map(counter=><Counter  key={counter.id} id ={counter.id} value={counter.value} counter={counter} id={counter.id} ></Counter>)}  
       
    </div>
)
}
   
 
    
  