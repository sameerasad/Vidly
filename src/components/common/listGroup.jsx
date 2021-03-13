import React from 'react'

function ListGroup(props) {

    const handleSelect =genre=>{

        console.log(genre)
      }

    const {items,value,textProperty} = props
    return (
       <ul className="list-group">
           {items.map(item=><li onClick={()=>handleSelect(item)} key={item[value]} className="list-group-item">{item[textProperty]}    </li>)}
           
       </ul> 
    )
    


}

ListGroup.defaultProps={
value:'_id',
textProperty:"name"

}

export default ListGroup
