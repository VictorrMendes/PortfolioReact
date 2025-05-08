import './Contact.css'

const Contact = () => {
    return (
        <section className='contact' id="contato">

            <div className='contact-container'>
                <h1>Contatos</h1>
                <p>A vontade para entrar em contato comigo, será um prazer atende-lo. Disponível todos os dias.</p>

                <div className='links'>
                    <a href="tel:+5531998186472">
                        <i id="whatsapp" className="fa-brands fa-whatsapp"> </i>
                        (31) 9 9818-6472
                    </a>

                    <a href="mailto:victo.mendes.souza@gmail.com.br">
                        <i id="e-mail" className="fa-solid fa-at"></i>
                        victo.mendes.souza@gmail.com.br
                    </a>
                </div>

                <div className="social-links">
                    <a href="https://github.com/VictorrMendes" className="social-link"><i id="github"
                        className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/victor-mendes-de-souza-728270234/"
                        className="social-link"><i id="linkedin" className="fab fa-linkedin-in"></i></a>
                </div>

            </div>
        </section>
    )
}

export default Contact