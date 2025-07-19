import { profile } from '../data/resume';

export default function Experience() {
  return (
    <section>
      <h3>💼 Experience</h3>
      {profile.experience.map((job, idx) => (
        <div key={idx}>
          <strong>{job.role}</strong>, {job.company} — <em>{job.period}</em>
          <ul>
            {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
