import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import Navbar from './compenents/estaticos/navbar/Navbar';
import ListaTema from './compenents/temas/listatema/ListaTema';
import Footer from './compenents/estaticos/footer/Footer';
import CadastroPost from './compenents/postagens/cadastroPost/CadastroPost';
import CadastroTema from './compenents/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './compenents/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './compenents/temas/deletarTema/DeletarTema';
import ListaPostagem from './compenents/postagens/listaPostagem/ListaPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <Navbar />

      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />


        </Routes>
      </div>

      <Footer />
    </Router>
   </Provider>
  );
}

export default App;