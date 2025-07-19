import { profile } from '../data/resume';

export default function About() {
  const avatar = `https://github.com/${profile.contacts.github}.png?size=200`;

  return (
    <section className="about">
      <div className="about-image">
        <img src={avatar} alt={`${profile.name} avatar`} />
      </div>
      <div className="about-text">
        <h2>Hello, I'm {profile.name}!</h2>
        <h3>{profile.title}</h3>
        <p>{profile.summary}</p>
        <p className="about-links">
          <a href={`https://github.com/${profile.contacts.github}`} target="_blank" rel="noreferrer">GitHub</a>
          {' | '}
          <a href={`https://stackoverflow.com/users/${profile.contacts.stackoverflow}`} target="_blank" rel="noreferrer">Stack Overflow</a>
        </p>
      </div>
    </section>
  );
}
