import { posts } from './posts';
import { translations } from './translations';
import './Blog.css';

export default function Blog({ openPost, lang = 'pt', dark = false, setLang, setDark }) {
  const t = translations[lang];

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <div className="top-bar">
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="pt">PT-BR</option>
          <option value="en">EN</option>
        </select>
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? t.lightMode : t.darkMode}
        </button>
      </div>
      <div className="blog">
        {posts.map((post) => (
          <div key={post.id} className="blog-item" onClick={() => openPost(post.id)}>
            <div className="summary">
              <h3>{typeof post.title === 'string' ? post.title : post.title[lang]}</h3>
              <p>{typeof post.summary === 'string' ? post.summary : post.summary[lang]}</p>
              <div className="tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
