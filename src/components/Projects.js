import React from 'react';
import images from './images';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div id="flex-container">
                <div className="project-card">
                    <img src={images.Bugetify} alt="Project Name" />
                    <h3><a href='https://budgety-alpha.vercel.app/'>Budgetify</a></h3>
                    <p>Description of the project.</p>
                </div>
                <div className="project-card">
                    <img src={images.pigGame} alt="Project Name" />
                    <h3><a href=''>Pig Game</a></h3>
                    <p>Description of the project.</p>
                </div>
                <div className="project-card">
                    <img src={images.gitApi} alt="Project Name" />
                    <h3><a href='https://3mtt-alt-schl.vercel.app/'>GitHub repository</a></h3>
                    <p>Description of the project.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
