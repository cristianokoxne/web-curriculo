import { useState } from 'react';
import './App.css';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState('pt');
  const t = translations[lang];

  return (
    <div className="app">
      <div className="lang-switcher">
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="pt">PT-BR</option>
          <option value="en">EN</option>
        </select>
      </div>

      <header className="header">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
        <div className="socials">
          <a href="https://www.linkedin.com/in/cristiano-koxne-8866511b9/" target="_blank" rel="noopener noreferrer"><img src="/images/lkd.png" alt="LinkedIn" /></a>
          <a href="https://github.com/cristianokoxne" target="_blank" rel="noopener noreferrer"><img src="/images/git.png" alt="GitHub" /></a>
          <a href="https://www.instagram.com/cristianokoxne/" target="_blank" rel="noopener noreferrer"><img src="/images/insta.png" alt="Instagram" /></a>
          <a href="https://twitter.com/cristianokoxne" target="_blank" rel="noopener noreferrer"><img src="/images/tw.png" alt="Twitter" /></a>
        </div>
      </header>

      <section>
        <h3>{t.introTitle}</h3>
        <p>{t.introText}</p>
      </section>

      <section>
        <h3>{t.experienceTitle}</h3>
        <div className="experience">
          <div>
            <h4>{t.occamTitle}</h4>
            <p>{t.occamText}</p>
          </div>
          <div>
            <h4>{t.armyTitle}</h4>
            <p>{t.armyText}</p>
          </div>
        </div>
      </section>

      <footer>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
