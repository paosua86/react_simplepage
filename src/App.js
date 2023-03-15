import logo from './logo.svg';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Contact />
      </header>
    </div>
  );
}

export default App;
