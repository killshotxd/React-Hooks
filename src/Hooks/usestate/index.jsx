// what is usestate
//syntax of usestate

import React, { Fragment, useState } from "react";

const UseStateHook = () => {
  //state item, method, initial value
  let [counter, setCounter] = useState(0); // initial value for counter
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <Fragment>
      <button onClick={handleClick}>Counter</button>
      <h3>{counter}</h3>
    </Fragment>
  );
};

export default UseStateHook;
