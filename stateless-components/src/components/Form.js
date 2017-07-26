import React from 'react'

class Form extends React.Component {

  render() {
    return(
      <div className="form-inline">
      <h2>SignUp</h2>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="email"
      />
      <input
        className="form-control"
        type="password"
        placeholder="password"
    />
      </div>
      </div>
    )
  }
}

export default Form
