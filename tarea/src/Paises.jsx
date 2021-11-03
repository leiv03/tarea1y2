import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Paises() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    async function getPaises() {
      const prueba = await axios.get("https://restcountries.com/v2/all");
      setPaises(prueba.data);
    }

    getPaises();
  });

  return (
    <div className="App">
      <h1>Paises</h1>
      <select name="paises" id="paises">
        {paises.map((pais) => {
          return (<option value={pais.name}>{pais.name}</option>)
        })}
      </select>
      <hr />
    </div>
  );
}


export default Paises;
