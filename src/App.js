import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img style={{ width: 570, height: 850}} src={require('./images/FinalCard.png')} alt="logo" />
        <img style={{ width: 0, height: 0 }} src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    
  );
}

export default App;
