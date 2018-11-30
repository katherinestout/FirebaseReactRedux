import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './components/store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

//connecting everything
const store = createStore(rootReducer, 
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        
    //this is how it knows to communicate to the firestore DB
        reduxFirestore(fbConfig),
        //add enhancer, firestoreforprofile synches profile, userprofile tells what to use
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
    ));

//the DOM will not render untill firebase auth is ready!    
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})


