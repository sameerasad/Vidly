import React,{useState} from 'react'

export default function Counter() {

    let [count, setCount] = useState(0)
    
    
    
   
   
   const formatCount=()=>{
     return  count===0 ? "Zero":count

     
   }

   getBadgeClasses()
    return (
        <div>
           
           
           <span style={{fontSize:20}} className={getBadgeClasses()} > {formatCount()}</span>
           <button className="btn btn-secondary btn-sm" onClick={()=>{setCount(count++)}} >Increament</button>
           <button className="btn btn-warning m-2 btn-sm" onClick={()=>{setCount(count--)}} >Decreament</button>
        </div>
    )

    
    function getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += count === 0 ? "danger" : "primary"
        return classes
    }
}




