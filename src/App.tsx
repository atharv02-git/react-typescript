import "./App.css";
import User from "./contexts/User";
import { UserContextProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  )    
}



