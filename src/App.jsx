import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { Pokemons } from './pages/Pokemons.jsx'
import { TodoList } from "./pages/TodoList.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pokemons" element={<Pokemons/>}></Route>
        <Route path="/todolist" element={<TodoList/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
