import React,{useState} from 'react'
import _ from "lodash" // optimize version of library underscore


function Pagination(props) {

    const {pageSize,itemsCount, currentPage, pageChange } = props
   

   
    
        

    


    console.log(pageSize,itemsCount);
    

    // array of pageNumber  [1,2,3].map() we wanna render a dynamic navigation on the basis of pagesCount

    const pagesCount =Math.ceil(itemsCount /pageSize)

    console.log(pagesCount)
    
    if(pagesCount === 1) return null

    // [1....pagesCounts]

    const pages = _.range(1, pagesCount + 1) //it will not include pageCount itself here pageCount is boundary value

    return (
       
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page=> 
          
          < li key={page} className={ page === currentPage[0]?"page-item active":"page-item"}>
              <a className="page-link" onClick={()=>handlePageChange(page)}  >{page}</a>
          </li>
         
  )}
      </ul>
    </nav>    
  
    )}


export default Pagination