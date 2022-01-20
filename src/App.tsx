import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";


export default function App() {
  return (
    <div className="App">
      <Private isLoggedin={false} component={Profile} />
    </div>
  )    
}



