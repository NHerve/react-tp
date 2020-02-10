import React from 'react';
import './App.css';

function App() {

  const test = {
    name:'toto',
    avatar : 'path',
    online : true
  }
  
    return (
        <div className="person-item">
          <label>{test.online?'online':'offline'}</label>
        </div>
    );
}

export default App;