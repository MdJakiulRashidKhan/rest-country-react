import React, { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name : {name?.common}</h3>
      <img className="img" src={flags?.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>
        <small>Code : {cca3}</small>
      </p>
      <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;
