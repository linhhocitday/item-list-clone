import React, { useState } from "react";
import Button from "./Button";

const initialValue = 0;

const Counter = ({ countValue, onIncrease, onDecrease, onRandom }) => {
  //* Use Hooks at here
  // const [count, setCount] = useState(initialValue); // [0, setState]

  // let increase = () => {
  //   setCount(count + 1);
  // };

  // let decrease = () => {
  //   setCount(count - 1);
  // };

  // let plus10 = () => {
  //   setCount(count + 10);
  // };

  // let minus10 = () => {
  //   setCount(count - 10);
  // };

  // let random = () => {
  //   setCount(Math.floor(Math.random() * 100));
  // };

  return (
    <div>
      <p>Current count: {countValue}</p>

      <Button onClick={onIncrease}>Increase</Button>
      <Button onClick={onDecrease}>Decrease</Button>
      {/* <Button onClick={plus10}>+10</Button>
      <Button onClick={minus10}>-10</Button> */}
      <Button onClick={onRandom}>Random number</Button>
    </div>
  );
};

export default Counter;
