import { posts } from './posts';
import { translations } from './translations';
import './Blog.css';

export default function Post({ id, goBack, lang = 'pt', dark = false, setLang, setDark }) {
  const post = posts.find((p) => p.id === id);
  if (!post) return null;

  const t = translations[lang];
  const backText = lang === 'en' ? '← Back' : '← Voltar';

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
      <div className="post">
        <div className="post-nav">
          <button onClick={goBack}>{backText}</button>
        </div>
        <h2>{typeof post.title === 'string' ? post.title : post.title[lang]}</h2>
        <div className="post-content">
          <div dangerouslySetInnerHTML={{
            __html: (typeof post.content === 'string' ? post.content : post.content[lang])
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/^## (.*$)/gm, '<h2>$1</h2>')
              .replace(/^### (.*$)/gm, '<h3>$1</h3>')
              .replace(/^- (.*$)/gm, '<li>$1</li>')
              .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
              .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
              const cleanCode = code.trim();
              return `<pre data-language="${lang || ''}"><code>${cleanCode}</code></pre>`;
            })
              .replace(/`([^`]+)`/g, '<code>$1</code>')
              .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
              .replace(/^\|(.+)\|$/gm, (match, content) => {
                const cells = content.split('|').map(cell => cell.trim());
                if (cells[0] === '' && cells[cells.length - 1] === '') {
                  cells.shift();
                  cells.pop();
                }
                const cellsHtml = cells.map(cell => `<td>${cell}</td>`).join('');
                return `<tr>${cellsHtml}</tr>`;
              })
              .replace(/(<tr>.*<\/tr>\s*)+/g, (match) => `<table class="markdown-table"><tbody>${match}</tbody></table>`)
              .replace(/\n\n/g, '</p><p>')
              .replace(/^(?!<[h|u|p|b])(.*)(?![>])$/gm, '<p>$1</p>')
              .replace(/<p><\/p>/g, '')
              .replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/g, '$1')
              .replace(/<p>(<ul>.*<\/ul>)<\/p>/gs, '$1')
              .replace(/<p>(<blockquote>.*<\/blockquote>)<\/p>/g, '$1')
              .replace(/<p>(<pre>.*<\/pre>)<\/p>/gs, '$1')
          }} />
        </div>
        <div className="post-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
