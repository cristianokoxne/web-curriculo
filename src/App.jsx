import { useState } from 'react';
import { FiBookOpen, FiHome } from 'react-icons/fi';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [currentPost, setCurrentPost] = useState(null);
  const [lang, setLang] = useState('pt');
  const [dark, setDark] = useState(false);

  const openPost = (id) => {
    setCurrentPost(id);
    setPage('post');
  };

  let content;
  if (page === 'home') {
    content = <Home lang={lang} setLang={setLang} dark={dark} setDark={setDark} />;
  } else if (page === 'blog') {
    content = <Blog openPost={openPost} lang={lang} dark={dark} setLang={setLang} setDark={setDark} />;
  } else if (page === 'post') {
    content = <Post id={currentPost} goBack={() => setPage('blog')} lang={lang} dark={dark} setLang={setLang} setDark={setDark} />;
  }

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <nav className="main-nav" aria-label="Navegação principal">
        <button className="brand" onClick={() => setPage('home')} aria-label="Ir para o início">CK<span>.</span></button>
        <div className="nav-links">
          <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}><FiHome /> Home</button>
          <button className={page === 'blog' || page === 'post' ? 'active' : ''} onClick={() => setPage('blog')}><FiBookOpen /> Blog</button>
        </div>
      </nav>
      {content}
    </div>
  );
}
