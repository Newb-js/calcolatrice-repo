import React, { useState } from "react";
import Display from "./Display";
import Tastiera from "./Tastiera";

function Calcolatrice() {
  const [data, setData] = useState("");

  calcolo = () => {
    try {
      const risultato = eval(data);
      setData(risultato);
    } catch (e) {
      setData("errore");
    }
  };

  gestoreClick = (e) => {
    const value = e.target.getAttribute("data-value");
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
