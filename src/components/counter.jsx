import React,{useState} from 'react'

export default function Counter() {
    let tags=[{name:"tag1",id:1},{name:"tag2",id:2},{name:"tag3",id:3}]
    
   function renderTags(){

    if(tags.length===0)return <p> there is no tags</p>;
    return <ul>{tags.map(tag=><li key={tag.id}>{tag.name}</li>)}</ul>


   } 
   
   

   
    return (
        <div>
          {
             renderTags() 
          }
        </div>
    )

    
    
}




