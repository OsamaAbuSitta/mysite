import { profile } from '../data/resume';

export default function Education() {
  return (
    <section>
      <h3>🎓 Education</h3>
      <ul>
        {profile.education.map((e, idx) => (
          <li key={idx}>{e.degree}, {e.school} ({e.year})</li>
        ))}
      </ul>
    </section>
  );
}
