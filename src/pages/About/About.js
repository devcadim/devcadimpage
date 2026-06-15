import './About.css';
import { Link } from 'react-router';
import profilePic from '../../components/assets/photo.png';

function About() {
    return (        
        <div className = "About">
            <nav className="Navbar">
                <div className="Nav-logo">DevCadim</div>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>

                <main className="Main-content" id="about">
                    <section className="Hero">
                        <div className="Hero-image-container">
                            <img src={profilePic} className="Profile-pic" alt="Foto de Ricardo Henrique" />
                        </div>
                        <div className="Hero-text">
                            <h1>Sobre mim</h1>
                            <p>
                            Olá, me chamo Ricardo Henrique, tenho 22 anos, estudo desenvolvimento de software back-end e sou apaixonado por tecnologia e inovação. 
                            Desde cedo, sempre tive uma curiosidade insaciável sobre como as coisas funcionam, o que me levou a explorar o mundo da programação e do desenvolvimento de software.
                            </p>
                            <p>
                            Me encontro finalizando o curso de Análise e Desenvolvimento de Software pela Estácio de Sá e possuo experiência prática em diversos projetos pessoais. 
                            Estou constantemente buscando aprimorar minhas habilidades e contribuir para a criação de soluções tecnológicas eficientes e inovadoras.
                            </p>
                            <div className="Hero-buttons">
                            <a href="#projetos" className="Btn-primary">Ver Projetos & Conhecimentos</a>
                            <a href="#contato" className="Btn-secondary">Contato</a>
                            </div>
                        </div>
                    </section>
            </main>
        </div>

    );
}


export default About; 