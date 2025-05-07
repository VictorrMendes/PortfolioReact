import './Skills.css'
import './keyframe.css'
const Skills = () => {
    return (
        <section id="skills" className="section" style={{
            backgroundImage: `url('/imagens/pexeus.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="container">
                <div className="habilidade">
                    <h2>Skills</h2>
                    <div className="skills-list">
                        <div className="skill">
                            <img src="/imagens/html-icon.svg" alt="Imagem Html 5" />
                            <p>HTML 5</p>
                            <div className="bar">
                                <div className="progress_base"></div>
                                <div className="progress_html"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <img src="/imagens/css-icon.svg" alt="Imagem CSS" />
                            <p>CSS 3</p>
                            <div className="bar">
                                <div className="progress_base"></div>
                                <div className="progress_css"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <img src="/imagens/js-icon.svg" alt="Icone JavaScript" />
                            <p>JavaScript</p>
                            <div className="bar">
                                <div className="progress_base"></div>
                                <div className="progress_js"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <img src="/imagens/python-svgrepo-com.svg" alt="Icone Python" />
                            <p>Python</p>
                            <div class="bar">
                                <div className="progress_base"></div>
                                <div className="progress_js"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <img src="/imagens/sap-svgrepo-com.svg" alt="Icone SAP" />
                            <p>SAP</p>
                            <div className="bar">
                                <div className="progress_base"></div>
                                <div className="progress_gt"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <img src="/imagens/git-icon.svg" alt="Icone Git" />
                            <p>Git</p>
                            <div className="bar">
                                <div className="progress_base"></div>
                                <div className="progress_gt"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <img src="/imagens/vs-code-icon.svg" alt="Icone Vs Code" />
                            <p>VsCode</p>
                            <div className="bar">
                                <div className="progress_base"></div>
                                <div className="progress_vs"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <img src="/imagens/excell-icon.svg" alt="Icone Excell" />
                            <p>Excell</p>
                            <div className="bar">
                                <div className="progress_base"></div>
                                <div className="progress_excell"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default Skills