import React from "react";

const Pulsante = (props) => {
  return (
    <>
      <button className="pulsante" value={props.value}>
        {props.label}
      </button>
    </>
  );
};

export default Pulsante;
