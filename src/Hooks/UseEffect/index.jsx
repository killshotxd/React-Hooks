//use effect will render everytime if there is any change in the components
//use effect will only run once if there is empty dependency array

import React, { Fragment, useEffect, useState } from "react";

function UseEffectHooks() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Use effect in Action but only once");
  }, []);

  //fetch data from placeholder api on page Load

  useEffect(() => {
    async function getDataOnPageLoad() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      if (data && data.length) setData(data);
      console.log(data);
    }

    getDataOnPageLoad();
  }, []);

  return (
    <Fragment>
      <button onClick={() => setCounter(counter + 1)}>Click Me </button>
      {counter}

      <ul>
        {data.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default UseEffectHooks;
