import { profile } from '../data/resume';

export default function Languages() {
  return (
    <section>
      <h3>🗣️ Languages</h3>
      <p>{profile.languages.join(' · ')}</p>
    </section>
  );
}
