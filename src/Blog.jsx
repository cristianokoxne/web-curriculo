import { posts } from './posts';
import './Blog.css';

export default function Blog({ openPost }) {
  return (
    <div className="blog">
      {posts.map((post) => (
        <div key={post.id} className="blog-item" onClick={() => openPost(post.id)}>
          <div className="tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="summary">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
