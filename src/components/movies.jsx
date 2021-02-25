import React,{Component,useState,useEffect} from 'react'
import {getMovies} from "../services/fakeMovieService"



function Movies() { 

    
    let [Movies, setMovies] = useState(getMovies);
      function handleDelete(movie) {
          console.log(movie)
          const movies = Movies.filter(m=>m._id!== movie._id)
          setMovies(movies)           
      }

      if(Movies.length===0)return <p>There are no movies in database</p>
     
       const count = Movies.length
 

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
                    <td> <button onClick={()=>{handleDelete(movie)}} className="button btn-danger btn-sm " >Delete</button></td>
                </tr>)}
                
                
            </tbody>
    </table>
    </>)
}
export default Movies




