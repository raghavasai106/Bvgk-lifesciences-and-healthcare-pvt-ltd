import { Link } from "react-router-dom";

const divisions = [
  {
    icon: "🫀",
    title: "Critical Care",
    to: "/services"
  },
  {
    icon: "🧬",
    title: "Oncology",
    to: "/services"
  },
  {
    icon: "💊",
    title: "Nutraceuticals",
    to: "/services"
  },
  {
    icon: "📦",
    title: "Our Products",
    to: "/services"
  },
  {
    icon: "📋",
    title: "Inquire Now",
    to: "/contact"
  }
];

const pillars = [
  {
    title: "Critical Care",
    detail:
      "A focused portfolio of life-saving critical care products ensuring availability and reliability where it matters most."
  },
  {
    title: "Oncology",
    detail:
      "Specialised oncology formulations supporting treatment protocols with consistent quality and supply chain integrity."
  },
  {
    title: "Nutraceuticals",
    detail:
      "Science-backed nutraceutical products bridging the gap between nutrition and therapeutic outcomes."
  }
];

const metrics = [
  { value: "3", label: "Therapeutic divisions" },
  { value: "PAN India", label: "Distribution reach" },
  { value: "GMP", label: "Compliant manufacturing" }
];

export default function HomePage() {
  return (
    <>
      <section className="diag-hero">
        <div className="diag-hero-inner">
          <div>
            <p className="chip">BVGK Lifesciences and Healthcare Pvt Ltd</p>
            <h1>Pharmaceutical Products Built for Critical Outcomes</h1>
            <p className="hero-copy">
              BVGK Lifesciences is a pharmaceutical company delivering quality-driven products
              across Critical Care, Oncology, and Nutraceuticals. We partner with healthcare
              professionals and institutions to ensure reliable supply and therapeutic impact.
            </p>
            <div className="hero-cta-group">
              <Link className="btn btn-primary" to="/contact">
                Inquire Now
              </Link>
              <Link className="btn btn-ghost" to="/services">
                Our Divisions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-frame">
        <div className="page-container">
          <h2 className="section-title">Our Divisions</h2>
          <div className="quick-actions">
            {divisions.map((item) => (
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

          <h2 className="section-title" style={{ marginTop: 48 }}>Why BVGK Lifesciences?</h2>
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
