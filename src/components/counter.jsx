import React,{useState} from 'react'

export default function Counter() {

    let [count, setCount] = useState(0)

   const formatCount=()=>{
     return  count===0 ? "Zero":count
   }
    return (
        <div>
           <span> {formatCount()}</span>
           <button onClick={()=>{setCount(count++)}} >Increament</button>
           <button onClick={()=>{setCount(count--)}} >Decreament</button>
        </div>
    )
}




