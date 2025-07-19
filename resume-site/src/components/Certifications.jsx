import { profile } from '../data/resume';

export default function Certifications() {
  return (
    <section>
      <h3>📜 Certifications</h3>
      <ul>
        {profile.certs.map((c, idx) => <li key={idx}>{c}</li>)}
      </ul>
    </section>
  );
}
