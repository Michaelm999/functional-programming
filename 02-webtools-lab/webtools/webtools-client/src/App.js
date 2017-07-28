import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Form from './Form.js'

const apiBaseUrl = 'http://localhost:3001/api'
axios.defaults.baseURL = apiBaseUrl

class App extends Component {

  state = {
    loading: true,
    tools: []
  }

  componentDidMount(){
    axios({url: '/tools'}).then((response)=>{
      console.log("fetching tools")
      this.setState({tools: response.data.tools, loading: false})
    })
  }

  onFormSubmit(data){
    this.setState({loading: true})
    console.log('Submit')
    axios.post('/tools', data)
    .then((res) => {
      console.log(res)
      axios({url: '/tools'}).then((response) => {
        console.log("fetching tools")
        this.setState({tools: response.data.tools, loading: false})
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

deleteTool(id){
  console.log('Deleting:', id)
  this.setState({loading: true})
  axios({url: `/tools/${id}`, method: 'DELETE'})
  .then((response) => {
      this.setState({loading: false,
        tools: this.state.tools.filter((tool) => {
          return tool._id !== id
        })
      })
  })
  .catch(function(error) {
    console.log(error)
  })
}

render() {
    return (
      <div className="App">
        <div className="App-header">
          <Form parent={this}/>
          <h2>{this.state.loading ? "loading.." : "Web Tools"}</h2>
        </div>
        {this.state.tools.map((tool)=> (
          <li key={tool._id}>
            {tool.name}
            <img src={tool.logoURL} />
            <button onClick={this.deleteTool.bind(this, tool._id)}>Exterminate</button>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
