import Reveal from "../components/Reveal";
import Cta from "../components/Cta";

const territories = ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu"];

export default function CareersPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="inner-hero-bg" style={{ backgroundImage: "url(/istockphoto-2215511952-1024x1024.jpg)" }} />
        <div className="inner-hero-overlay" />
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Careers</span>
            <h1 className="section-title">Build your career with BVGK</h1>
            <p className="section-sub">
              We're hiring Medical Representatives to help grow our anti infective and
              upcoming clinical nutrition portfolio across South India.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-frame">
        <div className="page-container">
          <div className="card-grid">
            <Reveal>
              <div className="glass-card">
                <span className="chip">Now Hiring</span>
                <h2 style={{ marginTop: 12 }}>Medical Representative</h2>
                <p style={{ marginTop: 8 }}>
                  Field based role promoting BVGK's anti infective portfolio to hospitals
                  and healthcare professionals.
                </p>
                <div className="product-meta">
                  {territories.map(t => (
                    <span key={t} className="product-tag" style={{ marginRight: 6 }}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-frame bg-section">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">How to Apply</span>
            <h2 className="section-title">Send us your application</h2>
            <p className="section-sub">
              Applications go directly to our Board of Directors. Email your resume to{" "}
              <a href="mailto:info@bvgklifesciences.com" style={{ color: "var(--primary)", fontWeight: 600 }}>
                info@bvgklifesciences.com
              </a>{" "}
              or reach out through our contact form with the territory you're applying for.
            </p>
          </Reveal>
          <Cta href="mailto:info@bvgklifesciences.com?subject=Medical%20Representative%20Application" variant="primary" arrow hint="Opens your email app">
            Email Your Application
          </Cta>
        </div>
      </section>
    </>
  );
}
