import React from 'react';

class Form extends React.Component {

  handleFormSubmit(evt){
    evt.preventDefault()
    const formData={
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.parent.onFormSubmit(formData)
    this.refs.email.value=''
    this.refs.password.value=''
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
      <input ref="email" type="text" placeholder="Email"/>
      <input ref="password" type="password" placeholder="Password"/>
      <button>Submit</button>
      </form>
    )
  }
}

export default Form
