import React, { Component } from 'react';

class Form extends Component {

  handleFormSubmit(evt){
    evt.preventDefault()

    const formData ={
      name: this.refs.name.value,
      description: this.refs.description.value,
      logoUrl: this.refs.logoUrl.value,
      documentationUrl: this.refs.documentationUrl.value,
    }
    if (this.props.id) {
      this.props.parent.editingTool(this.props.id)
    }else{
    this.props.parent.onFormSubmit(formData)
    }
    for(var ref in this.refs) {
      this.refs[ref].value = ''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <input ref="name" type="text" placeholder="Name" />
        <input ref="description" type="text" placeholder="Description" />
        <input ref="logoUrl" type="text" placeholder="Logo URL" />
        <input ref="documentationUrl" type="text" placeholder="Documentation URL" />
        <button>Add Tool</button>
      </form>
    )
  }
}

export default Form
