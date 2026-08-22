import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight, FiMail, FiMessageCircle } from 'react-icons/fi';
import './Contact.css';

export default function Contact({ lang = 'pt', dark = false, setLang, setDark }) {
  const pt = lang === 'pt';
  const copy = {
    eyebrow: pt ? 'CONTATO · VAMOS CONVERSAR' : 'CONTACT · LET’S TALK',
    title: pt ? 'Tem um projeto em mente?' : 'Have a project in mind?',
    text: pt ? 'Estou disponível para conversar sobre produtos digitais, engenharia de software e automações que realmente resolvem problemas.' : 'I am available to talk about digital products, software engineering, and automations that solve real problems.',
    email: pt ? 'Enviar um e-mail' : 'Send an email',
    network: pt ? 'Ou me encontre por aqui' : 'Or find me here',
    availability: pt ? 'ABERTO A NOVOS PROJETOS' : 'OPEN TO NEW PROJECTS',
  };

  return <main className={`contact-page ${dark ? 'dark' : ''}`}>
    <section className="contact-hero">
      <div className="contact-stamp"><FiMessageCircle /><span>{copy.availability}</span></div>
      <p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="contact-intro">{copy.text}</p>
      <a className="email-cta" href="mailto:cristiano_koxne@outlook.com"><FiMail /> {copy.email} <FiArrowUpRight /></a>
    </section>
    <section className="contact-networks"><p className="section-kicker">{copy.network}</p><div className="network-links">
      <a href="https://www.linkedin.com/in/cristiano-koxne-8866511b9/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn <FiArrowUpRight /></a>
      <a href="https://github.com/cristianokoxne" target="_blank" rel="noreferrer"><FaGithub /> GitHub <FiArrowUpRight /></a>
    </div></section>
  </main>;
}
