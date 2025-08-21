import { useState } from 'react';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [currentPost, setCurrentPost] = useState(null);

  const openPost = (id) => {
    setCurrentPost(id);
    setPage('post');
  };

  let content;
  if (page === 'home') {
    content = <Home />;
  } else if (page === 'blog') {
    content = <Blog openPost={openPost} />;
  } else if (page === 'post') {
    content = <Post id={currentPost} goBack={() => setPage('blog')} />;
  }

  return (
    <div>
      <nav className="main-nav">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('blog')}>Blog</button>
      </nav>
      {content}
    </div>
  );
}
