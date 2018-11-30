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
        default:
        return state;
    }
}

export default authReducer;