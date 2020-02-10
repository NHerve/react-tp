import React from 'react';
import './App.css';

function App() {

  const name = 'toto';
  const avatar = 'path';
  const online = true;
  
    return (
        <div className="person-item">
          <label>{online?'online':'offline'}</label>
        </div>
    );
}

export default App;