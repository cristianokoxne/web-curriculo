import { useEffect, useState } from 'react';
import { FiBookOpen, FiHome, FiMail, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Contact from './Contact';
import './App.css';

const normalizePath = (path) => path.replace(/\/+$/, '') || '/';

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const [lang, setLang] = useState('pt');
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const syncPath = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', syncPath);
    return () => window.removeEventListener('popstate', syncPath);
  }, []);

  const navigate = (nextPath) => {
    const normalized = normalizePath(nextPath);
    if (normalized !== path) {
      window.history.pushState({}, '', normalized);
      setPath(normalized);
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const postId = path.startsWith('/blog/') ? decodeURIComponent(path.slice('/blog/'.length)) : null;
  const page = postId ? 'post' : path === '/blog' ? 'blog' : path === '/contato' ? 'contact' : 'home';

  useEffect(() => {
    document.title = page === 'home' ? (lang === 'pt' ? 'Currículo' : 'Resume') : page === 'contact' ? (lang === 'pt' ? 'Contato' : 'Contact') : 'Blog';
  }, [page, lang]);

  let content = <Home lang={lang} setLang={setLang} dark={dark} setDark={setDark} navigate={navigate} />;
  if (page === 'blog') content = <Blog openPost={(id) => navigate(`/blog/${id}`)} lang={lang} dark={dark} setLang={setLang} setDark={setDark} />;
  if (page === 'post') content = <Post id={postId} goBack={() => navigate('/blog')} lang={lang} dark={dark} setLang={setLang} setDark={setDark} />;
  if (page === 'contact') content = <Contact lang={lang} dark={dark} setLang={setLang} setDark={setDark} />;

  return <div className={`app ${dark ? 'dark' : ''}`}>
    <nav className="main-nav" aria-label="Navegação principal">
      <button className="brand" onClick={() => navigate('/')} aria-label="Ir para o início">CK<span>.</span></button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <button className={page === 'home' ? 'active' : ''} onClick={() => navigate('/')}><FiHome /> Home</button>
        <button className={page === 'blog' || page === 'post' ? 'active' : ''} onClick={() => navigate('/blog')}><FiBookOpen /> Blog</button>
        <button className={page === 'contact' ? 'active' : ''} onClick={() => navigate('/contato')}><FiMail /> {lang === 'pt' ? 'Contato' : 'Contact'}</button>
      </div>
      <div className="nav-controls">
        <select aria-label="Selecionar idioma" value={lang} onChange={(e) => setLang(e.target.value)}><option value="pt">PT-BR</option><option value="en">EN</option></select>
        <button className="theme-toggle" onClick={() => setDark(!dark)}>{dark ? <FiSun /> : <FiMoon />}<span>{dark ? (lang === 'pt' ? 'Modo Claro' : 'Light Mode') : (lang === 'pt' ? 'Modo Escuro' : 'Dark Mode')}</span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <FiX /> : <FiMenu />}</button>
      </div>
    </nav>
    {content}
  </div>;
}
