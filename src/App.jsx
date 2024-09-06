import Home from "./Components/Home"
import Secretaria from "./Components/Secretaria"
import Coordenacao from "./Components/Coordenacao"
import Biblioteca from "./Components/Biblioteca"
import Central from "./Components/CentralAtendimento"
import Negociacoes from "./Components/Negociacao"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/secretaria" element={<Secretaria/>} />
    <Route  path="/biblioteca" element={<Biblioteca/>} />
    <Route  path="/central" element={<Central/>} />
    <Route  path="/coordenacao" element={<Coordenacao/>} />
    <Route  path="/negociacoes" element={<Negociacoes/>} />
    </ Routes>
   </Router>
   
  
   </>
  );
}

export default App;
