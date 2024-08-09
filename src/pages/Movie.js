import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
function Movie() {
  const [movie, setMovie]=useState([]);
  const params=useParams();
  const id=params.id;
  useEffect(()=>{
    fetch(`http://localhost:4000/movies/1`)
    .then(response=>response.json())
    .then(data=>setMovie(data))
    .catch(error=>console.error(error));
  }, [id]);
  if(!movie.title){
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <span>{movie.genres}</span>
      </main>
    </>
  );
};

export default Movie;
