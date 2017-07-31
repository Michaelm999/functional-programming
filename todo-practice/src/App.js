import React, { Component } from 'react';
import './App.css';


class App extends Component {

 removeTodo(index){
   let todos = this.state.todos
   let todo = todos.find(function(todo) {
     return todo.counter === index
   })
   todos.splice(todo, 1)

   this.setState({
     todos: todos
   })
 }


addTodo(event){
  event.preventDefault()
  let name=this.refs.name.value
  let counter=this.state.counter
let todo = {name, counter}
counter+=1
let todos =this.state.todos

todos.push(todo)

this.setState({
  todos: todos,
  counter: counter
})
this.refs.todoForm.reset()
}
  constructor(){
    super()
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.state = {
      todos: [],
      title: "react simple todo application",
      counter: 0
    }
  }

  render() {
    let title=this.state.title
    let todos=this.state.todos
    return (

      <div className="App">
        <form ref="todoForm">
          <h1>{title}</h1>
          <input type="text" ref="name" />
          <button onClick={this.addTodo}> Add To Do</button>
        </form>
        <ul>
          {todos.map((todo => <li key={todo.counter}>{todo.name}
            <button onClick={this.removeTodo.bind(null, todo.counter)}>delete</button>
          </li>))}
        </ul>
      </div>
    );
  }
}

export default App;
