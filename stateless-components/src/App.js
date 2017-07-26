import React, { Component } from 'react';
import './App.css'
import 'milligram'

import LivingRoom from './components/LivingRoom'

class App extends Component {

  onBananaClick(){
    console.log('BOOOM!');
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">
              <LivingRoom />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
