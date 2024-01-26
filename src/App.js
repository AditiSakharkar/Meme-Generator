import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Pages/Home";
import Editpage from "./Pages/Edit";
import Heading from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Heading />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit" element={<Editpage />} />
      </Routes>
    </div>
  );
}

export default App;
