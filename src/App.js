import React from 'react';
import './App.css';
import Header from './components/header/header';
import Services from './components/services/services';
import { Formulario } from './components/formulario/formulario';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientesAso from './components/conocenos/clientes_asoci';
import Cultura from './components/conocenos/cultura';
import Testimonios from './components/conocenos/testimonios';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Nav from './components/nav';
import Cambio from './components/cambio/cambio';
import Individual from './components/individual/individual';
import Vehiculos from './components/vehiculos/vehiculos';
import Viajes from './components/viajes/viajes';
import Hogar from './components/hogar/hogar';
import AtencionMedica from './components/atencionMedica/atencionMedica';
import AccidentesPersonales from './components/accidentesPersonales/accidentesPersonales';
import Pymes from './components/pymes/pymes';
import Corporativo from './components/corporativo/corporativo';
import Masivo from './components/masivo/masivo';
import Innovadores from './components/innovadores/innovadores';
import Fianzas from './components/fianzas/fianzas';

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
            <Individual />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/pymes" element={<>
            <Pymes />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/corporativo" element={<>
            <Corporativo />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/howden" element={<>
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/vehiculo" element={<>
            <Vehiculos />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/atencionmedica" element={<>
            <AtencionMedica />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/accidentespersonales" element={<>
            <AccidentesPersonales />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/viajes" element={<>
            <Viajes />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/hogar" element={<>
            <Hogar />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/masivo" element={<>
            <Masivo />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/innovadores" element={<>
            <Innovadores />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/fianzas" element={<>
            <Fianzas />
            <Formulario />
            <Cambio />
          </>} />
          <Route path="/howden" element={<>

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
