import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Blockquotes from './components/Blockquotes'
import 'milligram'
import Input from './components/Input'
import List from './components/List'
import Table from './components/Table'
import Form from './components/Form'

const quote = "I don't have a good quote yet"
const listItems = ["Saber", "Archer", "Lancer"]

const products = [{
  name: "onion",
  price: ".99",
  id: 1
}, {
  name: "pepper",
  price: "1.25",
  id: 2
}, {
  name: "broccoli",
  price: "3.00",
  id: 3
}];


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
              <Form />
              <Button onButtonClick={this.onBananaClick} text="BANANA!"/>
              <Blockquotes text={quote} />
              <Input placeholder="New Todo..." />
              <List items={listItems} />
              <Table items={products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
