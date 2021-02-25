import React,{useState} from 'react'

    const Counter =()=> {
    let tags=[{name:"tag1",id:1},{name:"tag2",id:2},{name:"tag3",id:3}]
    
    
    let [count, setCount] = useState(0)
    
      const formatCount=()=>{
     return  count===0 ? "Zero":count

     
   }
   
   const getBadgeClasses=()=> {
    let classes = "badge m-2 badge-"
    classes += count === 0 ? "danger" : "primary"
    return classes
}

const renderTags=()=>{

    if(tags.length===0)return <p> there is no tags</p>;
    return <ul>{tags.map(tag=><li key={tag.id}>{tag.name}</li>)}</ul>


   } 

   
   const Increament= (productId)=> {
    console.log(productId)
      setCount(count++)
       

       
   }
   
   const Decreament =(productId)=> {
     console.log(productId)
     setCount(count--)
      

      
  }

   
    return (
        <div>
           
           
           <span style={{fontSize:20}} className={getBadgeClasses()} > {formatCount()}</span>
           <button className="btn btn-secondary btn-sm" onClick={()=>{Increament({id:1})}} >Increament</button>
           <button className="btn btn-warning m-2 btn-sm" onClick={()=>{Decreament({id:1})}} >Decreament</button>
           
        </div>
    )

    
    
}
 export default Counter;



