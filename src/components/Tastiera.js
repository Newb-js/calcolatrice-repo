import React from "react";

const Tastiera = (props) => {
  return (
    <div className="tastiera">
      <div className="tastiera-numeri">
        <Pulsante
          label="7"
          valorePulsante="7"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="8"
          valorePulsante="8"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="9"
          valorePulsante="9"
          onClick={props.gestoreClickTastiera}
        />

        <Pulsante
          label="4"
          valorePulsante="4"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="5"
          valorePulsante="5"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="6"
          valorePulsante="6"
          onClick={props.gestoreClickTastiera}
        />

        <Pulsante
          label="1"
          valorePulsante="1"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="2"
          valorePulsante="2"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="3"
          valorePulsante="3"
          onClick={props.gestoreClickTastiera}
        />

        <Pulsante
          label="."
          valorePulsante="."
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="0"
          valorePulsante="0"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="C"
          valorePulsante="C"
          onClick={props.gestoreClickTastiera}
        />
      </div>
      <div className="tastiera-operatori">
        <Pulsante
          label="/"
          valorePulsante="/"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="*"
          valorePulsante="*"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="-"
          valorePulsante="-"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="+"
          valorePulsante="+"
          onClick={props.gestoreClickTastiera}
        />
        <Pulsante
          label="="
          valorePulsante="="
          onClick={props.gestoreClickTastiera}
        />
      </div>
    </div>
  );
};

const Pulsante = (props) => {
  return (
    <>
      <button
        className="pulsante"
        value={props.valorePulsante}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </>
  );
};

export default Tastiera;
