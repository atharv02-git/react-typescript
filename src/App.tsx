import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button
        clickHandler={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input value="" changeHandler={(event) => console.log(event)} />
    </div>
  );
}

export default App;
