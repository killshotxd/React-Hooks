//use effect will render everytime if there is any change in the components
//use effect will only run once if there is empty dependency array

import React, { Fragment, useEffect, useState } from "react";

function UseEffectHooks() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Use effect in Action but only once");
  }, []);
  return (
    <Fragment>
      <button onClick={() => setCounter(counter + 1)}>Click Me </button>
      {counter}
    </Fragment>
  );
}

export default UseEffectHooks;
