import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Blockquotes from './components/Blockquotes'
import 'milligram'
import Input from './components/Input'
import List from './components/List'
import Table from './components/Table'
import Form from './components/Form'
import Dropdown from './components/Dropdown'

const quote = "I don't have a good quote yet"
const listItems = ["Saber", "Archer", "Lancer"]

const headings = ["name", "email", "Favorite Drink" ]
const tableData = [
  ["Michael", "michael_mazzarella@hotmail.com", "mai tai"],
  ["Vivian", "vivhuan@gmail.com", "Vodka"],
  ["Joan", "joan.sumpter@earthlink.net", "chardonnay"]
]
const options = [
  {value:'123', text:'viv'},
  {value:'456', text:'kyle'},
  {value:'789', text:'Matt'}
]


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
              <Table headings={headings} tableData={tableData} />
              <Dropdown options={options}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
