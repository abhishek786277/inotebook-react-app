import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About";
import { Notestate } from "./context/NoteContext";
import Practice from "./components/Practice";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <Notestate>
    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/p" element={<Practice/>} />
      </Routes>
    </BrowserRouter>
    </Notestate>
  );
}

export default App;
