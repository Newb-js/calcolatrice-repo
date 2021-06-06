import React, { useState } from "react";
import Display from "./Display";
import Tastiera from "./Tastiera";

function Calcolatrice() {
  const [data, setData] = useState("pene");

  return (
    <CalcolatriceContext.Provider value={{ data }}>
      <div className="calcolatrice">
        <Display />
        <Tastiera />
      </div>
    </CalcolatriceContext.Provider>
  );
}

export default Calcolatrice;
export const CalcolatriceContext = React.createContext();
