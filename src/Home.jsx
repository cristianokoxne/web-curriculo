import './App.css';
import { translations } from './translations';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Home({ lang = 'pt', setLang, dark = false, setDark }) {
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

      <header className="header">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>

        <div className="contact">
          {t.contact.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/cristiano-koxne-8866511b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/cristianokoxne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.instagram.com/cristianokoxne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://twitter.com/cristianokoxne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </header>

      <section>

        <h3>{t.summaryTitle}</h3>
        <p>{t.summaryText}</p>
      </section>

      <section>
        <h3>{t.skillsTitle}</h3>
        <div className="skills-grid">
          {t.skillsList.map((skill, i) => (
            <div key={i} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>{t.educationTitle}</h3>
        {t.education.map((ed, i) => (
          <div key={i} className="education-item">
            <strong>{ed.period}</strong> – {ed.degree}
          </div>
        ))}

      </section>

      <section>
        <h3>{t.experienceTitle}</h3>

        {t.experience.map((exp, i) => (
          <div key={i} className="exp-item">
            <h4>{exp.period}</h4>
            <p><strong>{exp.role}</strong></p>
            <ul>
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h3>{t.languagesTitle}</h3>
        <ul>
          {t.languagesList.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>

      </section>

      <footer>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

