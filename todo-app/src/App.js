import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {items: [], item: [], currentId: 0}//simulating id that server would give
  }

  addItem(){
    var currentId = this.state.currentId
    var currentItems = this.state.items.slice()//copies the array
    currentItems.push({id: currentId})
    this.setState({items: currentItems, currentId: currentId+1})
  }

  deleteItem(id) {
      this.setState({
        items: this.state.items.filter((item)=>{
          return item.id !== id
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>{this.state.item}</p>
          <button onClick={this.addItem.bind(this)}>Create New ToDo</button>
        </div>
        <div className="App-body">
          <ul>
            {this.state.items.map((item, i) => {
            return <TodoItem key={item.id} itemId={item.id} dad={this} />
            })}
          </ul>
        </div>
      </div>
    );
  }
}

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state = {editing: false, content: this.props.itemId}
  }
  saveItem(){
    console.log(this.refs.edit.value);
    this.setState({
      editing: false,
      content: this.refs.edit.value
    })
  }
  editItem(){
    console.log('let us edit');
    this.setState({editing: true})
  }
  showEditItem(){
    return (<li><input ref="edit" defaultValue={this.state.content}></input>
    <button onClick ={this.saveItem.bind(this)}>Save</button>
    <button onClick ={this.deleteItem.bind(this)}>Delete</button>
    </li>)
  }
  deleteItem(){
    this.props.dad.deleteItem(this.props.itemId)
  }
  showOne(id){
    console.log(id)
    this.setState({
      item: this.props.itemId
      })
    }

  showItem() {
  return (<li onClick={this.editItem.bind(this)}>
    {this.state.content}
  <button onClick ={this.showOne.bind(this)}>Show</button>
    </li>)
  }
  render(){
    if (this.state.editing)
      return this.showEditItem()
    else
      return this.showItem()
  }
}


export default App;
