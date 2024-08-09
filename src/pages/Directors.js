import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Directors() {
  const [director, setDirector]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:4000/directors`)
    .then(response=>response.json())
    .then(data=>setDirector(data))
    .catch(error=>console.error(error))
  }, [])
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
          {director.map((eachDirector)=>(
              <article key={eachDirector.id}>
                <h2>{eachDirector.name}</h2>
                <ul>
                  <li>{eachDirector.movies[0]}</li>
                  <li>{eachDirector.movies[1]}</li>
                  <li>{eachDirector.movies[2]}</li>
                </ul>
              </article>
          ))}
      </main>
    </>
  );
};

export default Directors;
