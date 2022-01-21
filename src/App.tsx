import "./App.css";
import { Toast } from "./components/Template-Literals/Toast";


export default function App() {
  return (
    <div className="App">
      {/* now instead of using position as center-center we can use a keyword Exclude which will help us to exculde the property we want */}
      {/* <Toast position='center-center'/> */}
      <Toast position='center'/>
    </div>
  );
}
