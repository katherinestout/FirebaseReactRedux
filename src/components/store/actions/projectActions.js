export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        //make asynch call to DB
        dispatch({type: 'CREATE_PROJECT', project});

    }
};