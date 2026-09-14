export function renderPost(content) {
  return content
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.*)$/gm, '<h3>$1</h3>').replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, language, code) => `<pre data-language="${language || ''}"><code>${code.trim()}</code></pre>`)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^> (.*)$/gm, '<blockquote>$1</blockquote>')
    .replace(/(?:^- .*(?:\n|$))+/gm, (block) => `<ul>${block.trim().split('\n').map((line) => `<li>${line.slice(2)}</li>`).join('')}</ul>`)
    .split(/\n{2,}/).map((block) => /^<(h[23]|ul|pre|blockquote|table|img)/.test(block.trim()) ? block : `<p>${block.replace(/\n/g, '<br />')}</p>`).join('\n');
}
