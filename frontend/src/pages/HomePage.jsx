import { Link } from "react-router-dom";

const services = [
  {
    icon: "🧪",
    title: "Laboratory Services",
    to: "/services"
  },
  {
    icon: "🧬",
    title: "Gene Diagnostics",
    to: "/services"
  },
  {
    icon: "🏠",
    title: "Home Sample Collection",
    to: "/contact"
  },
  {
    icon: "📋",
    title: "Health Checkups",
    to: "/services"
  },
  {
    icon: "📄",
    title: "Download Reports",
    to: "/contact"
  }
];

const pillars = [
  {
    title: "Laboratory Services",
    detail:
      "Comprehensive pathology tests including blood, urine, and clinical biochemistry with accurate, timely reporting."
  },
  {
    title: "Gene Diagnostic Services",
    detail:
      "Advanced molecular and genetic testing for precise diagnosis and personalized healthcare insights."
  },
  {
    title: "Home Sample Collection",
    detail:
      "Convenient at-home sample collection for patients who cannot visit our centre. We come to you."
  }
];

const metrics = [
  { value: "24/7", label: "Report availability" },
  { value: "NABL & CAP", label: "Accredited laboratory" },
  { value: "100+", label: "Test parameters" }
];

export default function HomePage() {
  return (
    <>
      <section className="diag-hero">
        <div className="diag-hero-inner">
          <div>
            <p className="chip">Sri Sri Shanmukhi Diagnostic Centre</p>
            <h1>Book Lab Tests & Gene Diagnostics with Trust and Precision</h1>
            <p className="hero-copy">
              Sri Sri Shanmukhi Diagnostic is an authorized service provider for <a href="https://www.metropolisindia.com/" target="_blank" rel="noopener noreferrer" className="metropolis-link">Metropolis Healthcare</a>. We offer comprehensive pathology and gene diagnostic services—from routine blood tests to advanced screening. Accurate results, timely reporting, and care at every step.
            </p>
            <div className="hero-cta-group">
              <Link className="btn btn-primary" to="/contact">
                Book a Test
              </Link>
              <Link className="btn btn-ghost" to="/services">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-frame">
        <div className="page-container">
          <h2 className="section-title">Our Services</h2>
          <div className="quick-actions">
            {services.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="quick-action-card"
              >
                <span className="icon-placeholder">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          <div className="metric-grid">
            {metrics.map((item) => (
              <article key={item.label} className="metric-card">
                <p>{item.value}</p>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: 48 }}>Why Choose Sri Sri Shanmukhi Diagnostic?</h2>
          <div className="card-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="glass-card">
                <h2>{pillar.title}</h2>
                <p>{pillar.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
