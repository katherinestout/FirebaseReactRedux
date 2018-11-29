import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

//if you have projects do this, if not don't map
//taking project as a prop
    //cycling thru projects if we have it
        //return project summary and assigning key value
const ProjectList = ({projects}) => {
    return(
        <div className='project-list section'>
        
        {projects && projects.map(project=>{
            return(
                <Link to ={'/project/' + project.id} key ={project.id}>
                <ProjectSummary project ={project} key={project.id}/>
                </Link>
            )
        })}

        </div>
    )
}
export default ProjectList;