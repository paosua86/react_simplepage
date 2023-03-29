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
import Innovadores from './components/innovadores/innovadores';
import Fianzas from './components/fianzas/fianzas';
import Howden from './components/howden/howden';

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
          </>} />
          <Route path="/individuales" element={<>
            <Individual />
          </>} />
          <Route path="/pymes" element={<>
            <Pymes />
          </>} />
          <Route path="/corporativo" element={<>
            <Corporativo />
          </>} />
          <Route path="/howden" element={<>
          </>} />
          <Route path="/vehiculo" element={<>
            <Vehiculos />
          </>} />
          <Route path="/atencionmedica" element={<>
            <AtencionMedica />
          </>} />
          <Route path="/accidentespersonales" element={<>
            <AccidentesPersonales />
          </>} />
          <Route path="/viajes" element={<>
            <Viajes />
          </>} />
          <Route path="/hogar" element={<>
            <Hogar />
          </>} />
          <Route path="/innovadores" element={<>
            <Innovadores />
          </>} />
          <Route path="/fianzas" element={<>
            <Fianzas />
          </>} />
          <Route path="/howdenone" element={<>
            <Howden />
          </>} />
        </Routes>

        <Formulario />
        <Cambio />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
