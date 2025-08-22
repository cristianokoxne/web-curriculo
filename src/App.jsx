import { useState } from 'react';
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
      <nav className="main-nav">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('blog')}>Blog</button>
      </nav>
      {content}
    </div>
  );
}
