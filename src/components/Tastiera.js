import React from "react";
import Pulsante from "./Pulsante";

const Tastiera = (props) => {
  return (
    <div className="tastiera">
      <Pulsante label={props.dataDrill} value="clear" />
      <Pulsante label="7" value="7" />
      <Pulsante label="4" value="4" />
      <Pulsante label="1" value="1" />
      <Pulsante label="0" value="0" />

      <Pulsante label="/" value="/" />
      <Pulsante label="8" value="8" />
      <Pulsante label="5" value="5" />
      <Pulsante label="2" value="2" />
      <Pulsante label="." value="." />

      <Pulsante label="x" value="x" />
      <Pulsante label="9" value="9" />
      <Pulsante label="6" value="6" />
      <Pulsante label="3" value="3" />
      <Pulsante label="" value="null" />

      <Pulsante label="-" value="-" />
      <Pulsante label="+" value="+" />
      <Pulsante label="=" value="=" />
    </div>
  );
};

export default Tastiera;
