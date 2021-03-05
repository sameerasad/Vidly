import React,{ useContext} from 'react'
import counterContext from "./counterContext"

 function NavBar() {

    const counter = useContext(counterContext)

    let totalCounters = counter[0].filter(c=>c.value >0).length
    return (
        <div>
          <nav className="navbar navbar-light bg-light">
          
    <a className="navbar-brand" href="#">counter</a>
    <span><badge className="badge badge-pill badge-secondary">{totalCounters}</badge></span>
       </nav>
        </div>
    )
}
export default  NavBar