import React from 'react';

const ProjectSlide1 = () => {
    return (
        <div className="slide">
            Wordk one
        </div>
    );
}

const ProjectSlide2 = () => {
    return (
        <div className="slide">
            Work Two
        </div>
    );
}

const Project = () => {
    return (
        <div className="section project">
            <ProjectSlide1 />
            <ProjectSlide2 />
        </div>
    );
}

export default Project;