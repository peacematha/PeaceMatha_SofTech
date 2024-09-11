import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Peacematha SofTech (PTY) LTD website is still under construction and coming soon!</p>

        <img style={{ width: 250, height: 200 ,paddingBottom:50}} src={require('./images/Lobola_Invitation.jpg')} alt="React Logo" />
        <img style={{ width: 150, height: 150, paddingup:50 }} src={logo} className="App-logo" alt="logo" />
        <h9>(2023/924131/07)</h9>
      </header>
    </div>
    
  );
}

export default App;
