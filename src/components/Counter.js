import React, { useEffect, useState } from "react"; //we will use useState
import "./counter.css";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0); //Counter will start from value 0

  //Handler of buttons.....

  const Increment = () => {
    setCount(count + 1); //increase of counter with 1
  };

  const Decrement = () => {
    //Only positive ....
    // Only positive integer is needed....
    const newValue = Math.max(0, count - 1);
    setCount(newValue); // Decrease the counter by 1, but not below 1
  };

  const Reset = () => {
    setCount(0); //Initialize counter to 0
  };

  //Another useHook
  useEffect(() => {
    document.title = `You clicked ${count} times`; //change the title of the page
  });

  return (
    <div className="container">
      <p>
        <Link to="/NotFoundPage">Not Found</Link>
      </p>

      <h1 className="counter">Counter: {count}</h1>
      <button className="bttn-1" onClick={() => Increment()}>
        Increment
      </button>
      <button className="bttn-2" onClick={() => Decrement()}>
        Decrement
      </button>
      <button className="bttn-3" onClick={() => Reset()}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
