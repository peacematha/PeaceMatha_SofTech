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
         He who finds a wife finds a good thing, And obtains favor from the LORD.</i>
        </h5>
      </Popup>
    </main>
    <div class="row">
    <div class="col-xl-12">
     <button style={{ width: 100, height:16}}  className="button-63" onClick={()=> setButtonPopup(true)}>Click for more Information</button>
    </div>
    </div>

</div>
  );
}

 
export default App;
