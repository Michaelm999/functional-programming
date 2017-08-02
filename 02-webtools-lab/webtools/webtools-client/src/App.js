import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Form from './Form'

const apiBaseUrl = 'http://localhost:3001/api'
axios.defaults.baseURL = apiBaseUrl
class App extends Component {

  state = {
    loading: true,
    tools: [],
    editing: null
  }

  componentDidMount() {
    axios({url: '/tools'}).then((response) => {
      console.log("Fetching tools from API...")
      this.setState({tools: response.data.tools, loading: false})
    })
  }

  onFormSubmit(data) {
    this.setState({loading: true})
    axios({url: '/tools', method: 'POST', data: data})
      .then((response) => {
        this.setState({
          loading: false,
          tools: [...this.state.tools, response.data.tool]
        })
      })
  }

  editTool(id) {
    console.log("Editing:", id)
    this.setState({loading: true})
    axios({url: `/tools/${id}`}).then((response) => {
      this.setState({
        loading: false,
        editing: response.data.tool
      })
    })

  }

  cancelEdit() {
    this.setState({editing: null})
  }

  updateTool(id, evt) {
    evt.preventDefault()
    this.setState({loading: true})
    axios({
      url: `/tools/${id}`,
      method: 'PATCH',
      data: {
        name: this.refs.editName.value,
        description: this.refs.editDescription.value,
        logoUrl: this.refs.editLogoUrl.value,
        documentationUrl: this.refs.editDocumentationUrl.value
      }
    }).then((response) => {

      const toolIndex = this.state.tools.findIndex((tool) => {
        return tool._id === id
      })

      this.setState({
        editing: null,
        loading: false,
        tools: [
          ...this.state.tools.slice(0, toolIndex),
          response.data.tool,
          ...this.state.tools.slice(toolIndex + 1)
        ]
      })
    })
  }

  deleteTool(id) {
    this.setState({loading: true})
    axios({url: `/tools/${id}`, method: 'DELETE'})
      .then((response) => {
        this.setState({
          loading: false,
          tools: this.state.tools.filter((tool) => {
            return tool._id !== id
          })
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.loading ? 'Loading...' : 'WebTools'} ({this.state.tools.length})</h2>
          <Form parent={this} />
        </div>
        {this.state.tools.map((tool) => (
          this.state.editing && tool._id === this.state.editing._id
          ? (
            <li key={tool._id}>
              <form onSubmit={this.updateTool.bind(this, tool._id)}>
                <input ref="editName" type="text" defaultValue={this.state.editing.name} />
                <input ref="editDescription" type="text" defaultValue={this.state.editing.description} />
                <input ref="editLogoUrl"type="text" defaultValue={this.state.editing.logoUrl} />
                <input ref="editDocumentationUrl" type="text" defaultValue={this.state.editing.documentationUrl} />
                <button>Submit</button>
              </form>
              <button onClick={this.cancelEdit.bind(this)}>Cancel</button>
            </li>
          )
          : (
            <li key={tool._id}>
              {tool.name}
              <img src={tool.logoUrl} />
              <button onClick={this.editTool.bind(this, tool._id)}>Edit</button>
              <button onClick={this.deleteTool.bind(this, tool._id)}>Delete</button>
            </li>
          )
        ))}
      </div>
    );
  }
}

export default App;
