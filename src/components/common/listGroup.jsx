import React from 'react'

function ListGroup(props) {

    const {items,value,textProperty} = props
    return (
       <ul className="list-group">
           {items.map(item=><li key={item[value]} className="list-group-item">{item[textProperty]}</li>)}
           
       </ul> 
    )
}

export default ListGroup