/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App2.css";

//tarea2
function Gatos() {
  const [gatos, setGatos] = useState({});

  async function getGatos() {
    const prueba = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    setGatos(prueba.data[0]);
  }
  useEffect(() => {
    getGatos();
  }, []);

  return (
    <div className="App">
      <p>Precione si quiere ver otro gatito</p>
      <button className="botonGatos" type="button" onClick={getGatos}>Clik me</button> <br/>
      <img className="imgGatos" src={gatos.url} alt="gato" />
    </div>
  );
}

export default Gatos;
