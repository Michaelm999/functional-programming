import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'

class SignUp extends React.Component {

  state = {
    shouldRedirect: false
  }

  handleFormSubmit(evt){
    evt.preventDefault()
    const formData = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log("creating account");
    console.log(formData);
    auth.signup(formData).then(success => {
      if (success) {
        this.setState({shouldRedirect: true})
      }
    })
  }

  render(){
    return(
      this.state.shouldRedirect
      ? <Redirect to='/login' />
      :(
      <div className="SignUp">
      <h1>Create An Account</h1>
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <input ref='name' type='text' placeholder='Name' />
        <input ref='email' type='text' placeholder='Email' />
        <input ref='password' type='password' placeholder='Password' />
        <button>Create Account</button>
      </form>
      </div>
      )
    )
  }
}

export default SignUp
