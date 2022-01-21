import "./App.css";
import { Button } from "./components/html/Button";

export default function App() {
  return (
    <div className="App">
      {/* we can pass props like this but what is we want to pass choildren between html tags it will provide error */}
     {/* <Button variant="primary" /> */}
     {/* <Button variant="primary" onClick={() => console.log('Clicked!!')}>Click Me</Button> */}
     {/* Again what if we want to restrict the children props to only set to string then we need to use keyword "Omit" */}
     <Button variant="primary" onClick={() => console.log('Clicked!!')}>
        {/* <div>Click me</div> */}
        Click me
      </Button>
    </div>
  );
}
