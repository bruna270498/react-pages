// import React from 'react';
import React, { useState } from 'react';
import Principal from './pages/paginalPrincipal';
import './style/main.sass';

function App() {
  const [a, seta] = useState();
  return (
     <div className="App">
       <Principal />
    </div> 
  );
}

export default App;

