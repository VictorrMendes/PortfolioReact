import React, { useEffect, useState } from 'react';
import './Projects.css'


function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://victorrmendes.pythonanywhere.com/projects/');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Erro ao buscar os projetos:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <section id="projetos" className="section">
            <h2>Projetos</h2>
            <div className="projects-content">
                <div className="projects-grid">
                    {projects.map((project, index) =>
                        project.title && project.projetc_img && project.description && project.link_project ? (
                            <div className="project-box" key={index}>
                                <div className="project-inner">
                                    <div className="project-front">
                                        <img src={project.projetc_img} alt={project.title} className="project-img" />
                                        <h2 className="project-title">{project.title}</h2>
                                        <span className="Ferramentas">{project.tools}</span>
                                    </div>
                                    <div className="project-back">
                                        <h2 className="project-title">{project.title_back}</h2>
                                        <h4>Descrição:</h4>
                                        <p>{project.description}</p>
                                        <span className="Ferramentas">{project.tools}</span>
                                        <a href={project.link_project} target="_blank" rel="noopener noreferrer" className="link_projetc">
                                            Ver projeto
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects