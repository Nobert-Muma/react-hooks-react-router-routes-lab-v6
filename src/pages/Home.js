import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
function Home() {
  const [movie, setMovie]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then(res=>res.json())
    .then(data=>setMovie(data))
    .catch(error=>console.error(error));
  },[])
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>

        {movie.map((eachMovie)=>(
           <MovieCard key={eachMovie.id} id={eachMovie.id} title={eachMovie.title}/>
        ))}
      </main>
    </>
  );
};

export default Home;
