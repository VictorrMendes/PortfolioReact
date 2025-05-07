import './About.css'

const About = () => {
    return (
        <section>
            <div className='container'>
                <div className='about'>
                    <h1>Sobre</h1>
                    <h3>Conheça um pouco sobre mim</h3>
                    <p>
                        Sou Victor Mendes de Souza, estudante de Ciências da Computação. 
                        Tenho experiência prática como desenvolvedor freelancer e analista de operações, com destaque para o desenvolvimento de soluções personalizadas, 
                        automação de processos e melhorias em operações logísticas e tecnológicas. Minhas habilidades incluem programação em Python, JavaScript e SQL, 
                        além de conhecimentos em sistemas de gestão como SAP e ENGEMAN. 
                        Busco sempre aplicar criatividade e lógica para resolver problemas e entregar resultados de alta qualidade.<br /><br />

                        👨‍🎓 <strong>Formação Acadêmica:</strong><br />
                        <ul>
                            <li> Faculdade de Ciências da Computação (2024–2028)</li>
                        </ul>
                    </p>

                    <p>
                        💻 <strong>Habilidades Técnicas:</strong><br />
                        <ul>
                            <li> HTML </li>
                            <li> CSS </li>
                            <li> JavaScript </li>
                            <li> Python </li>
                            <li> Excel</li>
                            <li> Banco de Dados</li>
                            <li> SAP </li>
                        </ul>
                    </p>

                    <p>
                        🧑‍💻 <strong>Objetivos Profissionais:</strong><br />
                        <ul>
                            <li>Desenvolver experiência prática em criação e manutenção de software e aplicações web,
                                aprimorando habilidades técnicas e entregando soluções de alta qualidade.</li>
                            <li>Expandir conhecimentos em tecnologias de front-end e automação de processos,
                                aplicando inovação para otimizar sistemas e melhorar a experiência do usuário.
                            </li>
                        </ul>
                    </p>

                </div>

                <div className='card'>
                    <img src='/imagens/perfil_redonda.jpg' alt='Minha foto' />
                    <p>Victor Mendes</p>
                    <div class="social-links">
                        <a href="https://github.com/VictorrMendes" id="github" class="social-link"><i
                            class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/victor-mendes-de-souza-728270234/" id="linkedin"
                            class="social-link"><i class="fab fa-linkedin-in"></i></a>
                        <a href="tel:+5531998186472" class="social-link"><i id="whatsapp"
                            class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default About