import React, { useRef, useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./Headers.css";
import Search from "./Search";
const Headers= (props) =>  {
  const chercher =useRef();
  const filtrer = () => {

    props.setFilter(props.liste.filter((e) => e.title.toLowerCase().includes(chercher.current.value.toLowerCase())))
    
}
const [rating,setRating]=useState()
const onStarClick =(nextvalue) =>{

 setRating(nextvalue);
 props.setFilter(props.liste.filter((e) => e.rating>=nextvalue))
}

  return (
    <div className="header">
      <div className="container">
      <div className="logo">
        <a href="#"> Movies </a>
      </div>
      <ul className="nav-link">
        <li>
          <a href="#"> MovieCard </a>
        </li>
        <li>
          <a href="#"> Movielist </a>
        </li>
        <li>
          <a href="#"> Filter </a>
        </li>
        <li>
       
<input type={"text"} placeholder="enter our movie" ref={chercher} onChange={filtrer}></input>
<StarRatingComponent 
          name="rate2" 
    
       
          starCount={5}
          value={rating}
          onStarClick={onStarClick}    />
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Headers;
