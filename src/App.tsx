import "./App.css";
import User from "./components/contexts/User";
import { UserContextProvider } from "./components/contexts/UserContext";
import { DomRef } from "./components/ref/DomRef";

export default function App() {
  return (
    <div className="App">
     <DomRef />
    </div>
  )    
}



