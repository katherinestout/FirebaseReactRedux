const initState = {
    authError: null
}

const authReducer = (state = initState, action) =>{
    //check action type
    switch(action.type){
        case 'LOGIN_ERROR':
        console.log('Login error!!')
        return {
            ...state,
            authError: 'Login has failed'
        }
        case 'LOGIN_SUCESS':
        console.log('Login success');
        return {
            ...state,
            authError: null
        }
        case 'SIGNOUT_SUCESS':
        console.log('signout sucess');
        return state;

        case 'SIGNUP_SUCCESS':
        console.log('Signup Success!');
        return{
            ...state,
            authError: null
        }
        case 'SIGNUP_ERROR':
        console.log('signup ERROR');
        return{
            ...state,
            authError: action.err.message
        }
        default:
        return state;
    }
}

export default authReducer;