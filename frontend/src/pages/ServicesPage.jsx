const services = [
  {
    title: "Laboratory Services",
    description:
      "Comprehensive pathology tests including blood, urine, biochemistry, and clinical diagnostics with accurate, timely reporting."
  },
  {
    title: "Gene Diagnostics",
    description:
      "Advanced molecular and genetic testing for inherited conditions, pharmacogenomics, and personalized healthcare insights."
  },
  {
    title: "Home Sample Collection",
    description:
      "Convenient at-home blood and sample collection for patients who cannot visit our centre. Book online, we come to you."
  },
  {
    title: "Health Checkup Packages",
    description:
      "Curated health packages for different age groups and lifestyles—preventive care made accessible and affordable."
  }
];

export default function ServicesPage() {
  return (
    <section className="page-frame">
      <div className="page-container">
        <article className="feature-panel">
          <p className="chip">Services</p>
          <h1>Laboratory and Gene Diagnostic Services</h1>
          <p>
            As an authorized service provider for{" "}
            <a href="https://www.metropolisindia.com/" target="_blank" rel="noopener noreferrer" className="metropolis-link">Metropolis Healthcare</a> (NABL & CAP accredited),
            we offer a full range of diagnostic services—from routine lab tests to
            advanced gene diagnostics—with accuracy, care, and timely reporting.
          </p>
        </article>

        <div className="card-grid">
          {services.map((service) => (
            <article className="glass-card" key={service.title}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
