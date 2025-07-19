import { profile } from '../data/resume'
import sun from '../assets/icon-sun.svg'
import moon from '../assets/icon-moon.svg'
import system from '../assets/icon-system.svg'

export default function Header({ toggleTheme, theme }) {
  const { name, title, contacts } = profile;
  const icons = { light: sun, dark: moon, system };
  const label = `${theme.charAt(0).toUpperCase()}${theme.slice(1)} mode`;
  return (
    <header>
      <button className="theme-switch" onClick={toggleTheme} title={label} aria-label={label}>
        <img src={icons[theme]} alt="" />
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
