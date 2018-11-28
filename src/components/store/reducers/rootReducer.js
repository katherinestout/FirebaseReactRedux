//combining both reducers
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';

//auth and project updates information on auth property in state
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;