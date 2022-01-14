import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  // working with array of object
  const nameList = [
    {
      first: "Atharv",
      last: "Bhandare",
    },
    {
      first: "Virat",
      last: "Kohli",
    },
    {
      first: "Sachin",
      last: "Tendulkar",
    },
  ];

  return (
    <div className="App">
      <Greet name="Atharv" messageCount={20} isLoggedin={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
