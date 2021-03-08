import React from 'react'
import _ from "lodash" // optimize version of library underscore

function Pagination(props) {

    const {pageSize,itemsCount } = props


    console.log(pageSize,itemsCount);
    

    // array of pageNumber  [1,2,3].map() we wanna render a dynamic navigation on the basis of pagesCount

    const pagesCount =Math.ceil(itemsCount/pageSize)

    console.log(pagesCount)
    
    if(pagesCount === 1) return null

    // [1....pagesCounts]

    const pages = _.range(1, pagesCount + 1) // it will not include pageCount itself

    return (
       
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page=> 
          
          < li key={page} className="page-item">
              <a className="page-link"  >{page}</a>
          </li>
         
  )}
      </ul>
    </nav>    
  
    )
}

export default Pagination
