import React,{ useState} from 'react'
import Counter from "./counter"

export default function Counters() {
let [counters, setCounters] = useState(
  [
  {id:1,value:1},
  {id:2,value:2},
  {id:3,value:3},
  {id:4,value:4},
  {id:5,value:5}
])
 
const handleDelete=(counterId)=> {
  console.log("event handler called",counterId)
  const newCounters = counters.filter(c=>c.id!==counterId)
  return setCounters(newCounters)
 
}

const handleIncreament=(counter)=> {
  counters = [...counters]
  const index = counters.indexOf(counter)
  counters[index]={...counter}
  counters[index].value++;

  setCounters(counters)
 
}


const handleDecreament=(counter)=> {
   counters = [...counters]
  const index = counters.indexOf(counter)
  counters[index]={...counter}
  counters[index].value--;

  setCounters(counters)

  
 
}
   
const  handleReset=()=> {
  const reset = counters.map(c=>{
    c.value=0
    return c;
  })
  return setCounters(reset)

  
}
   return (
    <div>
      <button  className="btn btn-primary btn-sm m-2" onClick={()=>{handleReset(counters)}}>Resent</button>
      {counters.map(counter=><Counter key={counter.id} value={counter.value} onDelete={()=>handleDelete(counter.id)} onIncreament={()=>handleIncreament(counter)}  onDecreament={()=>handleDecreament(counter)}></Counter>)}  
       
    </div>
)
}
   
 
    
