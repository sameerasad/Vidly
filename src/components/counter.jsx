import React,{useState} from 'react'

export default function Counter() {
    let tags=[{name:"tag1",id:1},{name:"tag2",id:2},{name:"tag3",id:3}]
    
    
    let [count, setCount] = useState(0)
    
      const formatCount=()=>{
     return  count===0 ? "Zero":count

     
   }
   function getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += count === 0 ? "danger" : "primary"
    return classes
}

   
    return (
        <div>
           
           
           <span style={{fontSize:20}} className={getBadgeClasses()} > {formatCount()}</span>
           <button className="btn btn-secondary btn-sm" onClick={()=>{setCount(count++)}} >Increament</button>
           <button className="btn btn-warning m-2 btn-sm" onClick={()=>{setCount(count--)}} >Decreament</button>
           <ul>{tags.map(tag=><li key={tag.id}>{tag.name}</li>)}</ul>
        </div>
    )

    
    
}




