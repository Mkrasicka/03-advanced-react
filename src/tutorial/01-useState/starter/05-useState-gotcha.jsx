import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentValue) => {
      currentValue = value + 1;
      console.log(currentValue);
      return currentValue;
    });
  };

  return (
    <div>
      <h1>Clicked : {value} times</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
