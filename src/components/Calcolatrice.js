import React, { useState } from "react";
import Display from "./Display";
import Tastiera from "./Tastiera";

function Calcolatrice() {
  const [data, setData] = useState("");

  calcolo = () => {
    try {
      var isSafe = /^[\d\+\-\*\/\s]*$/.test(data);
      if (isSafe) const risultato = eval(data);
      else {alert("BOOOOOOO");break;}
      setData(risultato);
    } catch (e) {
      setData("errore");
    }
  };

  gestoreClick = (e) => {
    const value = e.target.getAttribute("valorePulsante");
    switch (value) {
      case "clear":
        setData("");
        break;
      case "equal":
        calcolo();
        break;
      default:
        setData(data + value);
    }
  };

  return (
    <div className="calcolatrice">
      <Display />
      <Tastiera data={data} />
    </div>
  );
}

export default Calcolatrice;
