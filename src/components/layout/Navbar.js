import React from 'react';
import {Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks.js';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';
//import { map } from '@firebase/util';

const Navbar = (props) => {
    const {auth} = props;
   // console.log(auth);

   //turnery operator to show or hide links depending on uid matches
   const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;

    return (
        <nav className="nav-wrapper grey darken-3">
        <div className="container">
        <Link to ='/' className="brand-logo">
        KatProjectPlan
        </Link>
        
        {links}

        </div>
        
        </nav>
        
    )
}

//we can access this state in this property

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);