import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import Home from "./components/firstcontainer/Home";
import Second from "./components/Onglets/Second";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Home />
      <Second />
    </div>
  );
}

export default App;
