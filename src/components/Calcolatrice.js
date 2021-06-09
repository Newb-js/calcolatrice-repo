import React, { useState } from "react";
import Display from "./Display";
import Tastiera from "./Tastiera";

function Calcolatrice() {
  const [data, setData] = useState("");

  const calcolo = () => {
    try {
      let risultato;
      var isSafe = /^[\d\.\+\-\*\/\s]*$/.test(data);
      if (isSafe) risultato = eval(data);
      else alert("BOOOOOOO");
      setData(risultato);
    } catch (e) {
      setData("errore");
    }
  };

  const gestoreClick = (e) => {
    let valoreCorrente = e.target.getAttribute("value");
    if (valoreCorrente === "C") {
      setData("");
    } else if (valoreCorrente === "=") {
      calcolo();
    } else {
      setData(data + valoreCorrente);
    }
  };

  return (
    <div className="calcolatrice">
      <Display dataDisplay={data} />
      <Tastiera dataTastiera={data} gestoreClickTastiera={gestoreClick} />
    </div>
  );
}

export default Calcolatrice;
