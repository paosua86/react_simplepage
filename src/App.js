import React from 'react';
import './App.css';
import Header from './components/header/header';
import Services from './components/services/services';
import { Formulario } from './components/formulario/formulario';
import ClientesAso from './components/conocenos/clientes_asoci';
import Cultura from './components/conocenos/cultura';
import Testimonios from './components/conocenos/testimonios';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Nav from './components/nav';
import Cambio from './components/cambio/cambio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Header />

        <Routes>
          <Route path="/" element={<>
            <Home />
            <Testimonios />
            <ClientesAso />
            <Cultura />
            <Services />
            <Cambio />
            <Formulario />
          </>} />
          <Route path="/individuales" element={<>
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/pymes" element={<>
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/corporativo" element={<>
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/howden" element={<>
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/vehiculo" element={<>
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/atencionmedica" element={<>
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/accidentespersonales" element={<>
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/viajes" element={<>
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/hogar" element={<>
            <Formulario />
            <Cambio />
          </>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
