import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/navbar';
import Footer from './componentes/estaticos/footer/footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/login';
import CadastroUsuario from './paginas/cadastrar/Cadastrar';
import ListaTema from './componentes/temas/listatemas/ListasTemas';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

        <Route path="/temas" element={<ListaTema />} />

        <Route path="/posts" element={<ListaPostagem />} />



      </Routes>
      <Footer />
    </Router>

  );
}

export default App;