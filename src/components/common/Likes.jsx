
import React from 'react'

function Likes(props) {
    console.log(props)

      let classes = "fa fa-heart"
     if(!props.liked) classes += "-o"
    
    return (<div>
             
        
        <i className = {classes} aria-hidden="true" onClick={props.onClick} style={{cursor:"pointer"}} ></i>
        
     </div>
     )
        
    
}

export default Likes
