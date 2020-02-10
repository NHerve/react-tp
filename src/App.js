import React, { Component } from 'react';
import './App.css';
import Contact from './Components/Contact'

class App extends Component {

  state = {
    ctx:[
    {
      id:1,
      name:'toto',
      avatar:"https://randomuser.me/api/portraits/thumb/men/75.jpg",
      online:true
    },
    {
      id:2,
      name:'tata',
      avatar:"https://randomuser.me/api/portraits/thumb/men/74.jpg",
      online:false
    }]
  }

  render(){
    return (
        <div>
          <div className='person-item'>
            <Contact contact={this.state.ctx[0]}/>
          </div>
          <div className='person-item'>
            <Contact contact={this.state.ctx[1]}/>
          </div>
        </div>
    );
  }
}

export default App;