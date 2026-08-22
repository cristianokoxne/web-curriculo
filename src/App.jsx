import { useEffect, useState } from 'react';
import { FiBookOpen, FiHome } from 'react-icons/fi';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import './App.css';

const normalizePath = (path) => path.replace(/\/+$/, '') || '/';

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const [lang, setLang] = useState('pt');
  const [dark, setDark] = useState(false);

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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const postId = path.startsWith('/blog/') ? decodeURIComponent(path.slice('/blog/'.length)) : null;
  const page = postId ? 'post' : path === '/blog' ? 'blog' : 'home';

  useEffect(() => {
    document.title = page === 'home' ? (lang === 'pt' ? 'Currículo' : 'Resume') : 'Blog';
  }, [page, lang]);

  let content = <Home lang={lang} setLang={setLang} dark={dark} setDark={setDark} />;
  if (page === 'blog') {
    content = <Blog openPost={(id) => navigate(`/blog/${id}`)} lang={lang} dark={dark} setLang={setLang} setDark={setDark} />;
  } else if (page === 'post') {
    content = <Post id={postId} goBack={() => navigate('/blog')} lang={lang} dark={dark} setLang={setLang} setDark={setDark} />;
  }

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <nav className="main-nav" aria-label="Navegação principal">
        <button className="brand" onClick={() => navigate('/')} aria-label="Ir para o início">CK<span>.</span></button>
        <div className="nav-links">
          <button className={page === 'home' ? 'active' : ''} onClick={() => navigate('/')}><FiHome /> Home</button>
          <button className={page === 'blog' || page === 'post' ? 'active' : ''} onClick={() => navigate('/blog')}><FiBookOpen /> Blog</button>
        </div>
      </nav>
      {content}
    </div>
  );
}
