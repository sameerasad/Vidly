import React,{useState} from 'react'

    const Counter =(props)=> {
    let tags=[{name:"tag1",id:1},{name:"tag2",id:2},{name:"tag3",id:3}]
    
    
    let [value, setValue] = useState(props.value)
    
      const formatCount=()=>{
     return  value===0 ? "Zero":value

     
   }
   console.log("props",props)
   
   const getBadgeClasses=()=> {
    let classes = "badge m-2 badge-"
    classes += value === 0 ? "danger" : "primary"
    return classes
}

const renderTags=()=>{

    if(tags.length===0)return <p> there is no tags</p>;
    return <ul>{tags.map(tag=><li key={tag.id}>{tag.name}</li>)}</ul>


   } 

   
   const Increament= (productId)=> {
    console.log(productId)
      setValue(value++)
       

       
   }
   
   const Decreament =(productId)=> {
     console.log(productId)
     setValue(value--)
      

      
  }
  

   console.log(props);
    return (
        <div>
           
           <h4>{props.children}</h4>
           <span style={{fontSize:20}} className={getBadgeClasses()} > {formatCount()}</span>
           <button className="btn btn-secondary btn-sm" onClick={()=>{Increament({id:1})}} >Increament</button>
           <button className="btn btn-warning m-2 btn-sm" onClick={()=>{Decreament({id:1})}} >Decreament</button>
           <button className="btn btn-danger sm m-2"onClick={()=>{props.onDelete()}} >Delete</button>
           
        </div>
    )

    
    
}
 export default Counter;



