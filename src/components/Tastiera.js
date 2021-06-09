import React from "react";

const Tastiera = (props) => {
  return (
    <div className="tastiera">
      <div className="tastiera-numeri">
        <Pulsante label="7" valorePulsante="7" />
        <Pulsante label="8" valorePulsante="8" />
        <Pulsante label="9" valorePulsante="9" />

        <Pulsante label="4" valorePulsante="4" />
        <Pulsante label="5" valorePulsante="5" />
        <Pulsante label="6" valorePulsante="6" />

        <Pulsante label="1" valorePulsante="1" />
        <Pulsante label="2" valorePulsante="2" />
        <Pulsante label="3" valorePulsante="3" />

        <Pulsante label="0" valorePulsante="0" />
        <Pulsante label="." valorePulsante="." />
        <Pulsante label="C" valorePulsante="clear" />
      </div>
      <div className="tastiera-operatori">
        <Pulsante label="-" valorePulsante="-" />
        <Pulsante label="+" valorePulsante="+" />
        <Pulsante label="/" valorePulsante="/" />
        <Pulsante label="x" valorePulsante="x" />
        <Pulsante label="=" valorePulsante="=" />
      </div>
    </div>
  );
};

const Pulsante = (props) => {
  return (
    <>
      <button className="pulsante" value={props.valorePulsante}>
        {props.label}
      </button>
    </>
  );
};

export default Tastiera;
