import React, { Component } from 'react'

 class SignIn extends Component {
     state = {
        email: "",
        password:""

     }
//gets the id of whatever input field is being updated
//and updates state of value of whatever is being updated
     handleChange = (e) => {
         this.setState({
             [e.target.id]: e.target.value
         })
     }
//prevents default action of form being submitted
//console log the state
     handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit} className="white">
      <h5 className = "grey-text text-darken-3">Sign In!</h5>
      <div className="input-field">
      <label htmlFor="email">Email</label>
      <input type ="email" id="email" onChange={this.handleChange}/>
      </div>
      <div className="input-field">
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={this.handleChange}/>
      </div>
      <div className="input-field">
      <button className="btn pink z-depth-0">Login</button></div>
      </form>
        
      </div>
    )
  }
}

export default SignIn
