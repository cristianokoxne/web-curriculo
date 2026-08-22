import { posts } from './posts';
import './Blog.css';

export default function Blog({ openPost, lang = 'pt', dark = false, setLang, setDark }) {
  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
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
