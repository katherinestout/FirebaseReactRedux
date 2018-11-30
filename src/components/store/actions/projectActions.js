export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        //make a reference to firestore DB
        const firestore = getFirestore();

        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        //making it possible to add project objects
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            //generates id
            authorId: authorId,
            createdAt: new Date()
            //.then is the callback when the task above is complete
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err });
        })
        //make asynch call to DB
        dispatch({type: 'CREATE_PROJECT', project});

    }
};