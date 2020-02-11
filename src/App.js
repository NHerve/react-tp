import React, { Component } from 'react';
import './App.css';
import ContactList from './Components/ContactList'
import ClickEventListener from './Components/ClickEventComponent/ClickEventListener'

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
            // <ContactList contactList={this.state.ctx}/>
            <div>
              <ClickEventListener></ClickEventListener>
            </div>

    );
  }
}

export default App;