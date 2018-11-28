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
    return state
}

export default projectReducer;