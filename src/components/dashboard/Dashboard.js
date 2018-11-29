import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';
//connecting to the firebase
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import { firestore } from 'firebase';

class Dashboard extends Component{
    render() {
        
       // console.log(this.props);
        const {projects} = this.props;
        return (
            <div className="dashboard container">
            <div className="row">
            <div className="col s12 m6">
            <ProjectList projects = {projects}/>
            </div>
            <div className="col s12 m5 offset-m1">
            <Notifications/>
            </div>
            </div>
            </div>
        )
    }
}
//mapping state to props, higher order component
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        projects: state.firestore.ordered.projects
    }
}
//now can access it by props.project inside the component above


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        //tells which collection to connect to
        //whenever the DB is changed it triggers the firestore reducer
        {collection: 'projects'}
    ]))(Dashboard);