import React from 'react';
import './App.css';
import Header from './components/header/header';
import Services from './components/services/services';
import Formulario from './components/formulario/formulario';
import ClientesAso from './components/conocenos/clientes_asoci';
import Cultura from './components/conocenos/cultura';
import Testimonios from './components/conocenos/testimonios';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <main>
        <Home />
        <Testimonios />
        <ClientesAso />
        <Cultura />
        <Services />
        <Formulario />
      </main>
      <Footer />
    </div>
  );
}

export default App;
