import React,{Component,useState,useEffect} from 'react'
import {getMovies} from "../services/fakeMovieService"
import Likes from "./common/Likes"
import Pagination from './common/pagination';
import counterContext from "./counterContext";
import  { pagination } from "../components/utills/pagination"




 

function Movies() { 

    
    const [allMovies, setMovies] = useState(getMovies);
    const [pageSize,setPageSize]=useState(4)

    const currentPage = useState(1)
    console.log(currentPage)


    
      function handleDelete(movie) {
          console.log(movie)
          const movies = allMovies.filter(m=>m._id!== movie._id)
          setMovies(movies)           
      }

      const handleLike=(movie)=>{
        console.log("clicked" ,movie)
        const movies =[...allMovies]
        const index = movies.indexOf(movie)
        movies[index] = {...movies[index]}
        movies[index].like = !movies[index].like 
        setMovies(movies)


    }


      if(allMovies.length===0)return <p>There are no movies in database</p>

       Movies = pagination(allMovies,currentPage[0],pageSize)

       console.log(Movies)
     
       
   
    const count =allMovies.length

      return(
      <>
      <p className="body">There are {count} movies in databse.</p>
      <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
                
                
            </tr>
            
            </thead>
            <tbody>
                {
                    Movies.map(movie=>
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRental}</td>
                    <td> <Likes liked={movie.like} onClick={()=>handleLike(movie)} /> </td>
                    <td> <button onClick={()=>{handleDelete(movie)}} className="button btn-danger btn-sm " >Delete</button></td>
                </tr>)}
                
                
            </tbody>
    </table>
    <counterContext.Provider value={currentPage}>
    <Pagination itemsCount={allMovies.length} pageSize={pageSize}  />
    </counterContext.Provider>
    </>)
}
export default Movies




