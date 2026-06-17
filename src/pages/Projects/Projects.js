import '../../components/styles/global.css';
import './Projects.css';
import { Link } from 'react-router';
import { FaGithub } from 'react-icons/fa';

function Projects() {
    return (
        <div className="Projects">
            <nav className="Navbar">
                <div className="Nav-logo">DevCadim</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>

            <main className="Main-content-projects">
                <header className="Projects-header">
                    <h1>Meus Projetos</h1>
                    <p>Conheça algumas das aplicações que desenvolvi recentemente.</p>
                </header>

                <div className="Projects-grid">
                    {/* Card do Projeto 1 */}
                    <div className="Project-card">
                        <div className="Project-card-content">
                            <h2>Sistema de Gerenciamento de Arquivos</h2>
                            <p className="Project-description">
                                Uma API que utiliza do conceito CRUD para organizar e acompanhar arquivos, com funcionalidades de criação, edição, exclusão de arquivos e identificação por usuário.
                            </p>
                            <div className="Tech-badges">
                                <span>Java 21</span>
                                <span>Spring Boot 3</span>
                                <span>MySQL</span>
                                <span>Docker</span>
                                <span>Spring Security</span>
                            </div>
                        </div>
                        <div className="Project-links">
                            <a href="https://github.com/devcadim/file-upload-api" target="_blank" rel="noreferrer" className="Project-btn-primary">
                                <FaGithub size={20} />
                                Ver Código
                            </a>
                        </div>
                    </div>

                    {/* Exemplo de Card do Projeto 2 (Duplicado para você ver o Grid funcionando) */}
                    <div className="Project-card">
                        <div className="Project-card-content">
                            <h2>Fluxo E-Commerce</h2>
                            <p className="Project-description">
                                Controle de fluxo de um e-commerce, com funcionalidades de cadastro de produtos, gerenciamento de estoque, processamento de pedidos e integração com gateways de pagamento.
                                Assim como registro de usuários, autenticação e autorização para acesso a áreas restritas do sistema.
                            </p>
                            <div className="Tech-badges">
                                <span>Java 21</span>
                                <span>Spring Boot 3</span>
                                <span>MySQL</span>
                                <span>Redis</span>
                                <span>Spring Security</span>
                            </div>
                        </div>
                        <div className="Project-links">
                            <a href="https://github.com/devcadim" target="_blank" rel="noreferrer" className="Project-btn-primary">
                            Em desenvolvimento
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Projects;