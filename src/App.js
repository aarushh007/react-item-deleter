import React from "react";
import "./styles.css";

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" }
];

export default function App() {
  const [people, setPeople] = React.useState(data);
  const deleteEveryone = () => {
    setPeople([]);
  };
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div className="App">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove Person</button>
          </div>
        );
      })}
      <br />
      <br />
      <button onClick={deleteEveryone}>Delete Everyone</button>
    </div>
  );
}
