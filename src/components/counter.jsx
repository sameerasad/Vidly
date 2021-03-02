import React,{useState,  useContext} from 'react';
import CounterContext from "./counterContext"

    const Counter =(props)=> {

        let counter = useContext(CounterContext)
        let [counters, setCounters] = useState( counter )
    
        let tags=[{name:"tag1",id:1},{name:"tag2",id:2},{name:"tag3",id:3}]
    
   
    console.log(counters)
   
    
      const formatCount=()=>{
     return  props.value===0 ? "Zero":props.value

     
   }
   const handleDelete = (counterId) => {
    console.log("event handler called", counterId);
    const newCounters = counters.filter((c) => c.id !== counterId);
    return setCounters(newCounters);
  };

   
   const getBadgeClasses=()=> {
    let classes = "badge m-2 badge-"
    classes += props.value === 0 ? "danger" : "primary"
    return classes
}

const renderTags=()=>{

    if(tags.length===0)return <p> there is no tags</p>;
    return <ul>{tags.map(tag=><li key={tag.id}>{tag.name}</li>)}</ul>


   } 
   
   
  

      
  
  

   
    return (
      
      
        <div>
         
           
        
           <span style={{fontSize:20}} className={getBadgeClasses()} > {formatCount()}</span>
           <button className="btn btn-primary m-2 btn-sm" onClick={()=>setCounters(counter++)} >Increament</button> 
           <button className="btn btn-warning m-2 btn-sm" onClick={()=>setCounters(counter--)} >Decreament</button>
           <button className="btn btn-danger sm m-2"onClick={()=>handleDelete(counters.id)} >Delete</button>
           
        </div>
       
    )

    
    
}
 export default Counter;



