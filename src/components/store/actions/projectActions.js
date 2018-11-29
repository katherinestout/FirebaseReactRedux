export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        //make a reference to firestore DB
        const firestore = getFirestore();
        //making it possible to add project objects
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Kat',
            authorLastName: 'Stout',
            //generates id
            authorId: 12345,
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