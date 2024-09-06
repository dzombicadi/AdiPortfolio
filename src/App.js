import "./App.css";
import "./styles/Global.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar></NavBar>
      </div>
      <div className="main-content">
        <Home></Home>
        <About></About>
      </div>
    </div>
  );
}

export default App;
