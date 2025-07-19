import { profile } from '../data/resume';

export default function Summary() {
  return (
    <section>
      <h3>🧑‍💼Summary</h3>
      <p>{profile.summary}</p>
    </section>
  );
}
