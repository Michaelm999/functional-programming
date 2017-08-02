import React from 'react'
import auth from '../auth'

class LogIn extends React.Component {

  handleFormSubmit(evt){
    evt.preventDefault()
    const formData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log("Logging In");
    console.log(formData)
    auth.logIn(formData).then(user=>console.log(user))
  }

  render(){
    return(
      <div className="LogIn">
      <h1>Log In</h1>
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <input ref='email' type='text' placeholder='Email' />
        <input ref='password' type='password' placeholder='Password' />
        <button>Log In</button>
      </form>
      </div>
    )
  }
}

export default LogIn
