import React from "react";
import Carsoul from "./Carsoul";
import InteractiveList from "./contactList";
import "./App.css";

function App() {
  let contacts = [
    "Prashant",
    "Rahul",
    "Raman",
    "Raga",
    "Ronnie",
    "Rakesh",
    "Rachet",
    "Reiner",
  ];
  const [showCarsoul, setShowCarsoul] = React.useState(false);
  const [name, setName] = React.useState("");
  const handleCarsoulChanges = (name) => {
    setShowCarsoul(!showCarsoul);
    setName(name);
  };

  return (
    <>
      <div className="heading">Stories</div>
      <div className="App">
        <InteractiveList
          contacts={contacts}
          displayCarsoul={(name) => handleCarsoulChanges(name)}
        />
        <Carsoul showCarsoul={showCarsoul} name={name} />
      </div>
    </>
  );
}

export default App;
