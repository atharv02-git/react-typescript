import "./App.css";
import { Container } from "./components/Container";
import PersonList from "./components/PersonList";
import { Counter } from "./components/state/Counter";
import { User } from "./components/state/User";

function App() {
  const nameList = [
    {
      first: 'Atharv',
      last: 'Bhandare',
      id: 1
    },
    {
      first: "Virat",
      last: "Kohli",
      id: 2
    },
    {
      first: "Sachin",
      last: "Tendulkar",
      id: 3
    },
  ]
  return (
    <div className="App">
     <Container styles={{background: 'grey', padding: '2rem'}}/>
     <PersonList names={nameList}/>
     <User />
     <Counter />
    </div>
  );
}

export default App;
