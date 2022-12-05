import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import Home from "./components/firstcontainer/Home";
import Second from "./components/Onglets/Second";
import Thirty from "./components/carousel/Thirty";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Home />
      <Second />
      <Thirty />
    </div>
  );
}

export default App;
