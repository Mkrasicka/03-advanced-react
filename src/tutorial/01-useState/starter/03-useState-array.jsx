import { data } from "../../../data.js";
import React from "react";

const UseStateArray = () => {
  // !set array as people
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
    // people.filter(person.id === id);
  };
  // !set array to an empty array
  const clearAllPeople = () => {
    setPeople([]);
  };

  return (
    <div>
      {/* //!Iterate through people and set props to person */}
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={clearAllPeople}
      >
        Remove all
      </button>
    </div>
  );
};

export default UseStateArray;
