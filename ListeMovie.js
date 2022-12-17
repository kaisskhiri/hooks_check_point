import React, { useState } from "react";
import "./App.css";
import Headers from "./Header";
import "./ListeMovie.css";
import MovieCard from "./MovieCard";
import Show from "./Show";
import Star from "./Star";

function ListeMovie(props) {
  const [liste, setListe] = useState([
    {
      title: "SpiderMan",
      description: "Spider-Man est une série de films américains ",
      posterURL:
        "https://i.annihil.us/u/prod/marvel/i/mg/c/10/633cefa06d1f4/clean.jpg",
      rating: "4",
    },
    {
      title: "HarryPotter",
      description: " est une série américano-britannique ",
      posterURL:
        "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
      rating: "1",
    },
    {
      title: "Farha",
      description: "Farha is a historical drama film ",
      posterURL:
        "https://fr.web.img5.acsta.net/pictures/21/08/20/01/37/1792057.jpg",
      rating: "3",
    },
    {
      title: "Falling for Christmas",
      description:
        "Falling for Christmas is a 2022 American Christmas romantic comedy film ",
      posterURL:
        "https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSWw5VWRj2vav_zO7_kS9ZCBRwk85-yPKOEuQLc5iRcR6-4KM-5pMrw7ZofN1BoWE31zojNNfI8Fan7fmSy6RzMUcQY9Snl4USzJoGyI35NAP-2tI5z-i814mOY6b0PLNdL1yw.jpg?r=1e5",
      rating: "4",
    },
  ]);
  const [filtred,setFilter]=useState(liste)
  const [starfilter,setStarFilter]=useState(liste)

  return (
    <div>
    <Headers liste={liste} setFilter={setFilter}></Headers>  
      {filtred.map((e) => (
        <h3 className="liste-container">
          <img src={e.posterURL}></img>
          <br></br>
          Title : {e.title} <br></br>
          Description : {e.description}
          <br></br>
         <Star rate={e.rating}></Star>
        </h3>
      ))}

      <Show liste={liste} setListe={setListe}></Show>
         </div>
  );
}

export default ListeMovie;

// pour l'affichage il faut renvoyer les élements un par un exple pour le titre faut consulter e.title PS on peut pas renvoyer tout l'objet
