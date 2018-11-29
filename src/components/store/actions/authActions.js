export const signIn = (credientials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
//using firebase authentication to sign in with email and password
        firebase.auth().signInWithEmailAndPassword(
            credientials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCESS'
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
        })
    }
}