import React, { useState } from "react";
import Display from "./Display";
import Operatori from "./Operatori";

function Calculator() {
  const [valoreNumero, setValoreNumero] = useState("0");

  const buttonHandler = (e) => {
    setValoreNumero(e.target.value);
  };
  return (
    <>
      <Display value={this.valoreNumero} />
      <div>{valoreNumero}</div>
      <div className="input-grid">
        <button value="9" onClick={buttonHandler}>
          9
        </button>
        <button value="8" onClick={buttonHandler}>
          8
        </button>
        <button value="7" onClick={buttonHandler}>
          7
        </button>
        <button value="6" onClick={buttonHandler}>
          6
        </button>
        <button value="5" onClick={buttonHandler}>
          5
        </button>
        <button value="4" onClick={buttonHandler}>
          4
        </button>
        <button value="3" onClick={buttonHandler}>
          3
        </button>
        <button value="2" onClick={buttonHandler}>
          2
        </button>
        <button value="1" onClick={buttonHandler}>
          1
        </button>
        <button value="0" onClick={buttonHandler}>
          0
        </button>
        <button value="." onClick={buttonHandler}>
          .
        </button>
        <button className="uguale" value="=">
          =
        </button>
      </div>

      <Operatori />
    </>
  );
}

export default Calculator;
