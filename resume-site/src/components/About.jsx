import { profile } from '../data/resume';

export default function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img src="https://avatars.githubusercontent.com/u/9919?v=4" alt="Profile" />
      </div>
      <div className="about-text">
        <h2>Hello, I'm {profile.name}!</h2>
        <p>{profile.summary}</p>
      </div>
    </section>
  );
}
