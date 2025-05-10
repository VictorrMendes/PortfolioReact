import './Introduction.css'

const Introduction = () => {
    return (
        <section>
            <div className='container'>
                <div className='apresentacao'>

                    <h2>Desenvolvedor Front-End</h2>
                    <h1>Victor Mendes</h1>
                    <p>
                        <strong> Bem-vindo ao meu portfólio! </strong>
                        Sou Victor Mendes de Souza, um entusiasta da tecnologia com
                        experiência em desenvolvimento de aplicações web, automação de processos e análise de dados.
                        Minha trajetória é marcada pela busca constante por aprendizado e pela dedicação em criar
                        soluções eficientes e inovadoras. Aqui, você encontrará projetos que refletem meu compromisso
                        com a qualidade e minha paixão por resolver desafios. Sinta-se à vontade para explorar e
                        conhecer mais sobre meu trabalho!
                        <br>
                        </br>
                    </p>
                    <button className='btn'>
                        <a href='/documents/Currículo Victor Mendes_Desenvolvedor.pdf'>Baixar Currículo</a>
                    </button>

                </div>
                <div className='apresentacao-image'>
                    <img src='/imagens/programador1.png' alt='logo'></img>
                </div>
            </div>
        </section>
    )
}

export default Introduction