import React,{Component,useState,useEffect} from 'react'
import {getMovies} from "../services/fakeMovieService"


function Movies() {
    const[Movies,setMovies] =useState([])
    console.log(Movies);


    useEffect(() => {
          function getUsers() {
          const Result = getMovies()
          console.log(Result);
          setMovies(Result);
        } getUsers();
        console.log(Result)
    
      }, []);

      return(<table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
            </tr>
            
            </thead>
            <tbody>
                { Result.map(Result=>{<tr key={Result._id}>
                    <td>{Result.title}</td>
                    <td>{Result.genre.name}</td>
                    <td>{Result.numberInStock}</td>
                    <td>{Result.dailyRental}</td>
                </tr>})}
                
            </tbody>
    </table>)
}
export default Movies

/*class Movies extends Component {
    
        state = {
            Movies:getMovies()
          };
    
    render() {
        return (
        <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
            </tr>
            
            </thead>
            <tbody>
                {this.state.Movies.map(movie=>
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRental}</td>
                </tr>)}
                
            </tbody>
    </table>
            
        );
    }
}*/




