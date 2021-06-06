import React, { useState } from "react";
import Display from "./Display";
import Tastiera from "./Tastiera";

function Calculator() {
  return (
    <>
      <Display />
      <Tastiera />
    </>
  );
}

export default Calculator;
