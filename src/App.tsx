import "./App.css";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { StatusProps } from "./components/StatusProps";

function App() {
  return (
    <div className="App">
      <StatusProps status="success" />
      <Heading>Placeholder Text</Heading>  {/* (alias) function Heading(): JSX.Element import Heading Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'. */}

      {/* Another varaint is when child is another react component */}
      <Oscar>
        <Heading>Oscar goes to Leonardo dicaprio!</Heading>
      </Oscar>

      {/* sometimes it happens a component prop doesn't have to be passed */}
      <Greet name={'Atharv'} isLoggedin={false} />
    </div>
  );
}

export default App;
