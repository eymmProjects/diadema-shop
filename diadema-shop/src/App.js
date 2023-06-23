import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Home } from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
