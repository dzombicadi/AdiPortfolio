import "./App.css";
import "./styles/Global.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

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
      <Footer></Footer>
    </div>
  );
}

export default App;
