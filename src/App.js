import logo from './logo.svg';
import BarraNav from './componentes/barraNav';
import './App.css';

function App() {
  return (
    <div className="App">
      <BarraNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
