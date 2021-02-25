import React,{Component,useState,useEffect} from 'react'
import {getMovies} from "../services/fakeMovieService"


function Movies() {
   

    let [Movies, setMovies] = useState(getMovies);
    

      return(<table className="table ">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
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
                </tr>)}
                
                
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




