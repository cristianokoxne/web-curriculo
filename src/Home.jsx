import { useState } from 'react';
import './App.css';
import { translations } from './translations';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiArrowDown, FiBriefcase, FiCode, FiGlobe, FiMail, FiUser } from 'react-icons/fi';

export default function Home({ lang = 'pt', setLang, dark = false, setDark, navigate }) {
  const t = translations[lang];
  const [photoAvailable, setPhotoAvailable] = useState(true);

  return (
    <main className="resume-page">
      <header className="header hero">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="profile-frame" title="Foto de Cristiano Koxne">
          <div className="profile-ring" />
          {photoAvailable && <img src="/images/foto.png" alt="Cristiano Koxne" onError={() => setPhotoAvailable(false)} />}
          {!photoAvailable && <div className="profile-placeholder"><FiUser /><span>{lang === 'pt' ? 'Sua foto' : 'Your photo'}</span></div>}
          <span className="profile-label">{lang === 'pt' ? 'DISPONÍVEL PARA PROJETOS' : 'AVAILABLE FOR PROJECTS'}</span>
        </div>
        <p className="eyebrow">{lang === 'pt' ? 'PORTFÓLIO · ENGENHARIA DE SOFTWARE' : 'PORTFOLIO · SOFTWARE ENGINEERING'}</p>
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>

        <div className="contact">
          {t.contact.map((line, i) => (
            <p key={i}><FiMail /> {line}</p>
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
        <a className="scroll-cue" href="#summary"><FiArrowDown /> {lang === 'pt' ? 'Conheça meu trabalho' : 'Explore my work'}</a>
      </header>

      <section id="summary" className="intro-section reveal">
        <div className="section-kicker"><FiCode /> 01</div>

        <h3>{t.summaryTitle}</h3>
        <p>{t.summaryText}</p>
      </section>

      <section className="reveal">
        <div className="section-kicker"><FiCode /> 02</div>
        <h3>{t.skillsTitle}</h3>
        <div className="skills-grid">
          {t.skillsList.map((skill, i) => (
            <div key={i} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal">
        <div className="section-kicker"><FiBriefcase /> 03</div>
        <h3>{t.educationTitle}</h3>
        {t.education.map((ed, i) => (
          <div key={i} className="education-item">
            <strong>{ed.period}</strong> – {ed.degree}
          </div>
        ))}

      </section>

      <section className="reveal">
        <div className="section-kicker"><FiBriefcase /> 04</div>
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

      <section className="reveal language-section">
        <div className="section-kicker"><FiGlobe /> 05</div>
        <h3>{t.languagesTitle}</h3>
        <ul>
          {t.languagesList.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>

      </section>

      <footer>
        <p>{t.footer}</p>
        <div className="footer-links" aria-label="Navegação do rodapé">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('/blog'); }}>Blog</a>
          <a href="/contato" onClick={(e) => { e.preventDefault(); navigate('/contato'); }}>{lang === 'pt' ? 'Contato' : 'Contact'}</a>
        </div>
      </footer>
    </main>
  );
}

