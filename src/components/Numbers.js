import React from "react";

function Numbers() {
  return (
    <div className="input-grid">
      <button value="9">9</button>
      <button value="8">8</button>
      <button value="7">7</button>
      <button value="6">6</button>
      <button value="5">5</button>
      <button value="4">4</button>
      <button value="3">3</button>
      <button value="2">2</button>
      <button value="1">1</button>
      <button value="0">0</button>
      <button value=".">.</button>
      <button className="uguale" value="=">
        =
      </button>
    </div>
  );
}

export default Numbers;
