import "./App.css";
import { Container } from "./components/Container";
import PersonList from "./components/PersonList";
import { Counter } from "./components/state/Counter";
import { User } from "./components/state/User";
import { Box } from "./contexts/Box";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  const nameList = [
    {
      first: "Atharv",
      last: "Bhandare",
      id: 1,
    },
    {
      first: "Virat",
      last: "Kohli",
      id: 2,
    },
    {
      first: "Sachin",
      last: "Tendulkar",
      id: 3,
    },
  ];
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
        <Container styles={{ padding: "2rem" }} />
        <PersonList names={nameList} />
        <User />
        <Counter />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
