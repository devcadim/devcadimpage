import '../../components/styles/global.css';
import './ContactMe.css'; // Certifique-se de importar o CSS correto aqui
import { Link } from 'react-router';
import { SiGmail, SiInstagram, SiDiscord } from 'react-icons/si';

function ContactMe() {
    return (
        <div className="ContactMe">
            <nav className="Navbar">
                <div className="Nav-logo">DevCadim</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>

            <main className="Main-content-contacts">
                <header className="Contacts-header">
                    <h1>Contato</h1>
                    <p>Entre em contato comigo para mais informações ou oportunidades.</p>
                </header>

                <div className="Contacts-grid">
                    {/* Card Gmail */}
                    <div className="Contact-card contact-gmail">
                        <div className="Contact-card-content">
                            <SiGmail className="Contact-icon" />
                            <h2>E-mail</h2>
                            <p className="Contact-description">
                                Para propostas formais, parcerias ou dúvidas profissionais. Respondo em até 24 horas.
                            </p>
                        </div>
                        <div className="Contact-links">
                            <a href="mailto:devcadim.ricardo@gmail.com" target="_blank" rel="noreferrer" className="Contact-btn-brand">
                                Enviar E-mail
                            </a>
                        </div>
                    </div>

                    {/* Card Instagram */}
                    <div className="Contact-card contact-instagram">
                        <div className="Contact-card-content">
                            <SiInstagram className="Contact-icon" />
                            <h2>Instagram</h2>
                            <p className="Contact-description">
                                Acompanhe minha rotina de estudos, bastidores de projetos e networking do dia a dia.
                            </p>
                        </div>
                        <div className="Contact-links">
                            <a href="https://instagram.com/devcadim" target="_blank" rel="noreferrer" className="Contact-btn-brand">
                                Seguir no Insta
                            </a>
                        </div>
                    </div>

                    {/* Card Discord */}
                    <div className="Contact-card contact-discord">
                        <div className="Contact-card-content">
                            <SiDiscord className="Contact-icon" />
                            <h2>Discord</h2>
                            <p className="Contact-description">
                                Vamos conversar em tempo real, trocar códigos ou bater um papo sobre tecnologia.
                            </p>
                        </div>
                        <div className="Contact-links">
                            <a href="https://discord.com/users/325819300893949954" target="_blank" rel="noreferrer" className="Contact-btn-brand">
                                Chamar no Discord
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ContactMe;