import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";

function App() {
  const personName = {
    first: "Manvith",
    last: "Bujala",
  };
  return (
    <div className="App">
      <h1>React Azure Deployment</h1>
      <Greet name="Santosh Reddy Bujala" version={18} isLogedin={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
