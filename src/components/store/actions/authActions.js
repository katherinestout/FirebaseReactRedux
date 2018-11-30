export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
//using firebase authentication to sign in with email and password
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCESS' });
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        });
       
    }
}

export const signOut = () => {
    return (dispatch, getstate, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCESS'});
        });
    }
}