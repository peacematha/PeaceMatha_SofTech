import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img style={{ width: 750, height: 950 ,paddingBottom:50}} src={require('./images/Lobola_Invitation.jpg')} alt="logo" />
        <img style={{ width: 10, height: 10, paddingup:50 }} src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    
  );
}

export default App;
