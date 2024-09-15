// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <img style={{ width: 570, height: 770}} src={require('./images/FinalCard.png')} alt="logo" />
//         <img style={{ width: 0, height: 0 }} src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
    
//   );
// }

// export default App;

import './App.css';
import React, { useState } from 'react';
import Popup from './Popup';

function App() {
  const [buttonPopup, setButtonPopup]= useState(false);

  return (
    <div className="App">
     <main>
      <img style={{ width: 390, height: 490}} src={require('./images/FinalCard.png')} alt="logo" />
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h5 style={{color:'white',fontFamily: 'Chilanka'}} >
        <i> <a style={{color:'White',fontFamily: 'Chilanka'}}href="https://maps.google.com/?q=-25.692223,31.801546">Click here for the location</a> 
        <br></br>
        <br></br> 
        <br></br>
        <br></br> 
        <br></br>
        <br></br> 
        <br></br>  
         Contact Person:
         Mr Nyambi Albert (083 559 0838 / 068 396 8307) or Miss Nkosi Loveness (071 515 0895)<br></br>  
         <br></br>    
         Proverbs 18:22
         He who finds a wife finds what is good and receives favor from the LORD.</i>
        </h5>
      </Popup>
    </main>
     <button onClick={()=> setButtonPopup(true)}>Click for more Information</button>
    </div>
  );
}

 
export default App;

 

