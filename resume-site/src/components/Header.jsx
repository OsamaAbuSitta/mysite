import { profile } from '../data/resume';

export default function Header({ toggleTheme, darkMode }) {
  const { name, title, contacts } = profile;
  return (
    <header>
      <button className="theme-switch" onClick={toggleTheme}>
        {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>
        📍 {contacts.location} |
        <a href={`mailto:${contacts.email}`}>📧 {contacts.email}</a> | 📱 {contacts.phone} ·{' '}
      </p>
      <p>🌐
        <a href={`https://github.com/${contacts.github}`} target="_blank" rel="noreferrer">GitHub</a> |{' '}
        <a href={`https://stackoverflow.com/users/${contacts.stackoverflow}`} target="_blank" rel="noreferrer">Stack Overflow</a>
      </p>
    </header>
  );
}
