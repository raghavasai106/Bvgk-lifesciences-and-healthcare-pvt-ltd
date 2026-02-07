const values = [
  "Accuracy and precision in every test",
  "NABL & CAP accredited laboratory standards",
  "Timely reporting and transparent communication",
  "Patient-first care and convenience"
];

export default function AboutPage() {
  return (
    <section className="page-frame">
      <div className="page-container">
        <article className="feature-panel">
          <p className="chip">About Us</p>
          <h1>Diagnostics with accuracy and care</h1>
          <p>
            Sri Sri Shanmukhi Diagnostic Centre is an authorized service provider for{" "}
            <a href="https://www.metropolisindia.com/" target="_blank" rel="noopener noreferrer" className="metropolis-link">Metropolis Healthcare</a>,
            India&apos;s leading pathology and diagnostic lab. We deliver reliable
            laboratory and gene diagnostic services to patients, clinicians, and
            healthcare partners.
          </p>
          <p>
            As a Metropolis partner, Sri Sri Shanmukhi Diagnostic offers accurate tests, timely reports,
            home sample collection, and health checkup packages—backed by
            Metropolis&apos;s NABL and CAP-accredited labs.
          </p>
        </article>

        <article className="feature-panel">
          <h2 className="section-title">Our Core Values</h2>
          <ul className="clean-list">
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
