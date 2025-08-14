import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { Pokemons } from './pages/Pokemons.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list-people" element={<Home/>}></Route>
        <Route path="/pokemons" element={<Pokemons/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
