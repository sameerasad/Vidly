import React,{useState} from 'react'

export default function Counter() {

    let [count, setCount] = useState(0)
    
    
    
   
   
   const formatCount=()=>{
     return  count===0 ? "Zero":count
   }
    return (
        <div>
           
           
           <span className="badge m-2 badge-primary badge-size-20"> {formatCount()}</span>
           <button className="btn btn-secondary btn-sm" onClick={()=>{setCount(count++)}} >Increament</button>
           <button className="btn btn-warning m-2 btn-sm" onClick={()=>{setCount(count--)}} >Decreament</button>
        </div>
    )
}




