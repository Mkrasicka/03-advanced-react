import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    enjoy: "play games",
  });

  const showDetails = () => {
    //!to overwrite only one state
    // setPerson({ ...person, enjoy: "Coding" });
    setPerson({ name: "Magda", age: 31, enjoy: "Coding in React" });
  };
  return (
    <div>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>Enjoys: {person.enjoy}</h4>
      <button type="button" className="btn" onClick={showDetails}>
        show John
      </button>
    </div>
  );
};

export default UseStateObject;
