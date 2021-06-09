import React, { useState } from "react";
import Display from "./Display";
import Tastiera from "./Tastiera";

function Calcolatrice() {
  const [data, setData] = useState("");

  const calcolo = () => {
    try {
      let risultato;
      var isSafe = /^[\d\+\-\*\/\s]*$/.test(data);
      if (isSafe) risultato = eval(data);
      else alert("BOOOOOOO");
      setData(risultato);
    } catch (e) {
      setData("errore");
    }
  };

  const gestoreClick = (e) => {
    const valoreCorrente = e.target.getAttribute("valorePulsante");
    switch (valoreCorrente) {
      case "clear":
        setData("");
        break;
      case "equal":
        calcolo();
        break;
      default:
        setData(data + valoreCorrente);
    }
  };

  return (
    <div className="calcolatrice">
      <Display data={data} />
      <Tastiera data={data} gestoreClick={gestoreClick} />
    </div>
  );
}

export default Calcolatrice;
