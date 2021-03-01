import React,{useState} from 'react'

    const Counter =(props)=> {
    let tags=[{name:"tag1",id:1},{name:"tag2",id:2},{name:"tag3",id:3}]
    
    
   
    
      const formatCount=()=>{
     return  props.value===0 ? "Zero":props.value

     
   }
   console.log("props",props)
   
   const getBadgeClasses=()=> {
    let classes = "badge m-2 badge-"
    classes += props.value === 0 ? "danger" : "primary"
    return classes
}

const renderTags=()=>{

    if(tags.length===0)return <p> there is no tags</p>;
    return <ul>{tags.map(tag=><li key={tag.id}>{tag.name}</li>)}</ul>


   } 
   
   
  

      
  
  

   console.log(props);
    return (
      
      
        <div>
         
           
           <h4>{props.children}</h4>
           <span style={{fontSize:20}} className={getBadgeClasses()} > {formatCount()}</span>
           <button className="btn btn-primary m-2 btn-sm" onClick={()=>{props.onIncreament(props.counter)}} >Increament</button> 
           <button className="btn btn-warning m-2 btn-sm" onClick={()=>{props.onDecreament(props.counter)}} >Decreament</button>
           <button className="btn btn-danger sm m-2"onClick={()=>{props.onDelete(props.id)}} >Delete</button>
           
        </div>
       
    )

    
    
}
 export default Counter;



