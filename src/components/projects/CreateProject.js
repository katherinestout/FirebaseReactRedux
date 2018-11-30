import React, { Component } from 'react';
import {createProject} from '../store/actions/projectActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

 class CreateProject extends Component {
     state = {
       title:"",
       content:""

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
        //console.log(this.state);
        this.props.createProject(this.state)
        //passes it down to bottom and blah blah runs the createProject action and then can add it to data base blah blah
        this.props.history.push('/');
      }

  render() {
    const {auth} = this.props;
    //if not logged in, redirect
    if(!auth.uid) return  <Redirect to ='/signin'/>

    return (
      <div className="container">
      <form onSubmit={this.handleSubmit} className="white">
      <h5 className = "grey-text text-darken-3">Create a Project</h5>
      <div className="input-field">
      <label htmlFor="title">Title</label>
      <input type ="text" id="title" onChange={this.handleChange}/>
      </div>

      <div className="input-field">
      <label htmlFor="content">Project Content</label>
      <textarea id ="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
      </div>
      <div className="input-field">

      <button className="btn pink z-depth-0">Create!</button></div>
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    //whatever property we want to add to the props we add to this object
    //add method createProject
    createProject:(project) => dispatch(createProject(project))

//dispatch is calling createProject

    //when we call props.createProject: and pass in a project, it will run the function and
    //perform a dispatch somehow return the thing in createProject from the create project action
  //aka we can access createProject because of this! makes it available
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
