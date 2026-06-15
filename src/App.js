import profilePic from './components/assets/photo.png';
import './App.css';
import './components/styles/global.css';
import { Link } from 'react-router';
function App() {
  return (
    <div className="App">
      {/* Navegação principal */}
      <nav className="Navbar">
        <div className="Nav-logo">DevCadim</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>

      {/* Seção Principal / Apresentação */}
      <main className="Main-content" id="home">
        <section className="Hero">
          <div className="Hero-image-container">
            <img src={profilePic} className="Profile-pic" alt="Foto de Ricardo Henrique" />
          </div>
          <div className="Hero-text">
            <h1>Ricardo Henrique de Oliveira Santana</h1>
            <h2>Estudante de Desenvolvimento de Software Back-End</h2>
            <p>
              Seja bem-vindo ao meu espaço. Aqui você vai encontrar alguns dos meus principais 
              projetos, minhas especialidades técnicas e como entrar em contato comigo.
            </p>
            <div className="Hero-buttons">
              <Link to="/projetos" className="Btn-primary">Ver Projetos & Conhecimentos</Link>
              <Link to="/contato" className="Btn-secondary">Contato</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;