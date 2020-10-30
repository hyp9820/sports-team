import { Header } from "./components/Header";
import Team from "./components/Team";
import AddTeam from "./components/AddTeam";

import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header /> <hr />
        <AddTeam /> <hr />
        <Team />
      </div>
    </GlobalProvider>
  );
}

export default App;
