import React,{useState,  useContext} from 'react';
import CounterContext from "./counterContext"

    const Counter =(props)=> {

        const counter = useContext(CounterContext)
        
        const formatCount=()=>{
     return  props.value ===0 ? "Zero":props.value

     
   }
   const handleDelete = (counterId) => {
    console.log("event handler called", counterId);
    const newCounters = props.counter.filter((c) => c.id !== counterId);
    return counter[1](newCounters);
  };

   
   const getBadgeClasses=()=> {
    let classes = "badge m-2 badge-"
    classes += counter[0].value === 0 ? "danger" : "primary"
    return classes
}


   
  

      
  
  

   
    return (
      
      
        <div>
         
           
        
           <span style={{fontSize:20}} className={getBadgeClasses()} > {formatCount()}</span>
           <button className="btn btn-primary m-2 btn-sm" onClick={()=>(counter[1](++counter[0]))} >Increament</button> 
           <button className="btn btn-warning m-2 btn-sm" onClick={()=>(counter[1](--counter[0]))} >Decreament</button>
           <button className="btn btn-danger sm m-2"onClick={()=>handleDelete(props.id)} >Delete</button>
           
        </div>
       
    )

    
    
}
 export default Counter;



