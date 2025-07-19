import { profile } from '../data/resume';

export default function Skills() {
  return (
    <section>
      <h3>🛠️ Technical Skills </h3>
      <ul style={{columns: 1, listStyleType:'disc'}}>
        {profile.skills.map((s, idx) => <li key={idx}>{s}</li>)}
      </ul>
    </section>
  );
}
