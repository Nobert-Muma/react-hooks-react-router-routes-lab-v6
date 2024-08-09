import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Actors() {
  const [actor, setActor]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then(response=>response.json())
    .then(data=>setActor(data))
    .catch(error=>console.error(error));
  }, [])
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {
          actor.map((eachActor)=>(
            <article key={eachActor.id}>
              <h2>{eachActor.name}</h2>
              <ul>
                <li>{eachActor.movies[0]}</li>
                <li>{eachActor.movies[1]}</li>
                <li>{eachActor.movies[2]}</li>
              </ul>
            </article>
          ))
        }
      </main>
    </>
  );
};

export default Actors;
