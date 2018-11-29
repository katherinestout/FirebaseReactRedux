//combining both reducers
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';

//synchs firestore data with the state
import { firestoreReducer} from 'redux-firestore';

//auth and project updates information on auth property in state
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    /* this firestore reducer will automatically synch firestore 
    property on the state object to our data in the database
    it will retrive the data for us
    and it is also dependent on what component is active 
    at the time 
    however we need to tell it exactly which data to synch*/
    firestore: firestoreReducer
});

export default rootReducer;