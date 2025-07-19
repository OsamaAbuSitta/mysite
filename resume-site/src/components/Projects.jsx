import { profile } from '../data/resume';

export default function Projects() {
  return (
    <section>
      <h3>💻 Open Source & Contributions</h3>
      <ul>
        {profile.projects.map((p, idx) => (
          <li key={idx}><strong>{p.name}</strong> — {p.description}</li>
        ))}
      </ul>
    </section>
  );
}
