const initState = {
    projects:[
        {id: '1', title: 'help me find', content: 'blhahs'},
        {id: '2', title: 'help m', content: 'blhahs'},
        {id: '3', title: 'help ', content: 'blhahs'}
    ]
}
//^all of these are stored on a project property in state

const projectReducer = (state = initState, action) =>

{
    //check action type
    switch(action.type) {
        case 'CREATE_PROJECT':
        console.log('created project', action.project);
        return state;
        
        case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.error);
        return state;

        default:
        return state;
    }
}

export default projectReducer;