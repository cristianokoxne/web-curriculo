import { posts } from './posts';
import './Blog.css';

export default function Post({ id, goBack }) {
  const post = posts.find((p) => p.id === id);
  if (!post) return null;

  return (
    <div className="post">
      <button onClick={goBack}>Voltar</button>
      <h2>{post.title}</h2>
      <div className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <p>{post.content}</p>
    </div>
  );
}
