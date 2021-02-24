import React,{useState} from 'react'

export default function Counter() {
    let tags=[]
    
   function renderTags(){

    if(tags.length===0)return <p> there is no tags</p>;
    return <ul>{tags.map(tag=><li key={tag.id}>{tag.name}</li>)}</ul>


   } 
   
   

   
    return (
        <div>
          { tags.length===0 && <p>there is no tag</p>}
        </div>
    )

    
    
}




