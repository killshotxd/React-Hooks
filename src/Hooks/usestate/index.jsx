// what is usestate
//syntax of usestate

import React, { Fragment, useState } from "react";

const UseStateHook = () => {
  //state item, method, initial value
  //   let [counter, setCounter] = useState(0); // initial value for counter
  //   const handleClick = () => {
  //     setCounter(counter + 1);
  //   };

  const initialState = {
    name1: "",
    name2: "",
  };

  const [infoData, setInfoData] = useState(initialState);

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setInfoData((prevState) => ({
      ...prevState, //copy all the states
      [name]: value, //updating state with new value
    }));
  };

  console.log(infoData);

  return (
    <Fragment>
      {/* <button onClick={handleClick}>Counter</button>
      <h3>{counter}</h3> */}

      <input
        placeholder="Input One"
        value={infoData.name1}
        name="name1"
        onChange={handleOnchange}
      />
      <input
        placeholder="Input Two"
        value={infoData.name2}
        name="name2"
        onChange={handleOnchange}
      />
    </Fragment>
  );
};

export default UseStateHook;
