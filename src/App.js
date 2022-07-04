import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Homepage from "./Components/Homepage"
import {Loginpage} from "./Components/Loginpage"
import {Signuppage} from "./Components/Signuppage"
import { Notepage } from './Components/Notepage';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/notes" element={<Notepage />} />
    </Routes>
    </div>
  );
}

export default App;
