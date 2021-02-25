import React,{ useState} from 'react'
import Counter from "./counter"

export default function Counters() {
const [counter, setCounter] = useState([{id:1,value:1},{id:2,value:2},{id:3,value:3},{id:4,value:4},{id:5,value:5}])
    console.log(counter);
    return (
        <div>
          {counter.map(counter=><Counter key={counter.id}/>)}  
           
        </div>
    )
}
