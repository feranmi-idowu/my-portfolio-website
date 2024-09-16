import React from 'react';
import images from './images';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div >
                <div className="project-card">
                    <div className='flex-container'>
                        <img src={images.Bugetify} alt="Project Name" />
                        <div>
                            <h3><a href='https://budgety-alpha.vercel.app/'>Budgetify</a></h3>
                            <p>A web application that helps users track their income and expenses, visualize their financial data, and manage their budget effectively</p>
                            <br />
                            <h4>Project Info</h4>
                            <hr/>
                            <p>Year</p>
                            <p>2023</p>
                            <hr/>
                            <p>Tools/Stack</p>
                            <p>Html, CSS, JavaScripts, GitHub</p>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className='flex-container'>
                        <img src={images.pigGame} alt="pig-game-image" />
                        <div>
                            <h3><a href=''>Pig Game</a></h3>
                            <p>A web application that helps users track their income and expenses, visualize their financial data, and manage their budget effectively</p>
                            <br />
                            <h4>Project Info</h4>
                            <hr/>
                            <p>Year</p>
                            <p>2023</p>
                            <hr/>
                            <p>Tools/Stack</p>
                            <p>Html, CSS, JavaScripts, GitHub</p>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className='flex-container'>
                        <img src={images.gitApi} alt="Git " />
                        <div>
                            <h3><a href='https://3mtt-alt-schl.vercel.app/'>GitHub repository</a></h3>
                            <p>A web application that helps users track their income and expenses, visualize their financial data, and manage their budget effectively</p>
                            <br />
                            <h4>Project Info</h4>
                            <hr/>
                            <p>Year</p>
                            <p>2023</p>
                            <hr/>
                            <p>Tools/Stack</p>
                            <p>Html, CSS, JavaScripts, GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
