import React, { useState } from "react";
import Display from "./Display";
import Tastiera from "./Tastiera";

function Calcolatrice() {
  const [data, setData] = useState("pene");

  return (
    <div className="calcolatrice">
      <Display />
      <Tastiera dataDrill={data} />
    </div>
  );
}

export default Calcolatrice;
