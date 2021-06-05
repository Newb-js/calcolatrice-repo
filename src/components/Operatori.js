import React, { useState } from "react";

function Operatori() {
  const [valoreOperatore, setValoreOperatore] = useState("0");

  const buttonHandler = (e) => {
    setValoreOperatore(e.target.value);
  };

  return (
    <>
      <div className="operatore-grid">
        <button value="+" onClick={buttonHandler}>
          +
        </button>
        <button value="-" onClick={buttonHandler}>
          -
        </button>
        <button value="x" onClick={buttonHandler}>
          x
        </button>
        <button value="/" onClick={buttonHandler}>
          /
        </button>
      </div>
    </>
  );
}

export default Operatori;
