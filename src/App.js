import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import movie from "./Films.json";

function Film(props) {
  return (
    <div className="casrd">
      <div className="card-content">
        
      <img
          src={props.i.medium}
          alt={`Profile of ${props.name.first}`}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

Film.propTypes = {
  fullTitle: PropTypes.string,
  rank: PropTypes.string,
  image: PropTypes.string,
  year: PropTypes.string
};

export default function App() {
  return (
    <div className="App">
      <h1>Liste de films</h1>
      <h1>{movie.title}</h1>
      <div className="card">
        {movie.items.map((movie, index) => {
          return <Film {...movie} key={index} />;
        })}
      </div>
    </div>
  );
}
