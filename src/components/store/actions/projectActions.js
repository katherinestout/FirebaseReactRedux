export const createProject = (project) => {
    return (dispatch, getState) => {

        //make asynch call to DB
        dispatch({type: 'CREATE_PROJECT', project});

    }
};