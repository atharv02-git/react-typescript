import "./App.css";
import { List } from "./Generics/List";

export default function App() {
  return (
    <div className="App">
      {/* <List
        items={["Batman", "Superman", "IronMan"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: "Atharv",
            last: "Bhandare",
          },
          {
            id:2,
            first: "Stephen",
            last: "Strange",
          },
          { 
            id:3,
            first: "Gorilla",
            last: "Glass",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}
