import React from 'react';


//storing the id in id
const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
        <div className="card-content">
        <span className="card-title"> Project Title {id}</span>
        <p>Lorem ipsum</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
        <div>Posted By Kat</div>
        <div>some date</div>
        </div>
        </div>
        </div>
    )
}

export default ProjectDetails;