import Reveal from "../components/Reveal";

const values = [
  "GMP & regulatory compliance across every manufacturing partner",
  "Rigorous QA/QC systems and analytical laboratory testing",
  "Stability studies and documentation & data integrity on every batch",
  "Supply reliability and packaging capability hospitals can depend on"
];

const registry = [
  { label: "Founded",         text: "2026 — BVGK Lifesciences & Healthcare Pvt Ltd, Secunderabad, Telangana" },
  { label: "Drug License",    text: "Form 20B & Form 21B — TG/HYD/2026-151214" },
  { label: "GSTIN",           text: "36AAOCB0928K1ZE" },
  { label: "CIN",             text: "U86100TS2025PTC206078" },
  { label: "Manufacturing",   text: "4 WHO-GMP certified CMOs across Himachal Pradesh, Haryana, Gujarat & Maharashtra" },
  { label: "Coverage",        text: "Telangana, Andhra Pradesh, Karnataka & Tamil Nadu — expanding pan-India" }
];

const team = [
  {
    name: "Dr. Bollepalli Vishnu Vardhana Raju",
    role: "Director",
    bio: "An infectious disease specialist with more than two decades of clinical experience, bringing deep medical and scientific grounding to BVGK's anti-infective portfolio.",
    initials: "BV",
    color: "#004433"
  },
  {
    name: "Addagulla Ramakrishna",
    role: "Director",
    bio: "Three decades of experience in pharmaceutical industry sales and marketing, training and development, anchoring BVGK's commercial and distribution strategy.",
    initials: "AR",
    color: "#006644"
  },
  {
    name: "Kowlasker Madhavi Sudha",
    role: "Director",
    bio: null,
    initials: "KM",
    color: "#00875A"
  },
  {
    name: "Manchana Sravanthi",
    role: "Director",
    bio: null,
    initials: "MS",
    color: "#00A86B"
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">About Us</span>
            <h1 className="section-title">Pharmaceutical excellence across critical therapies</h1>
            <p className="section-sub">
              BVGK Lifesciences and Healthcare Pvt Ltd is a pharmaceutical company bringing
              WHO-GMP manufactured anti-infective therapies to hospitals across South India.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who we are — image + text */}
      <section className="page-frame">
        <div className="page-container">
          <div className="about-split">
            <Reveal>
              <div className="about-img-wrap">
                <img src="/nappy-J5UTvRgse7Q-unsplash.jpg" alt="Healthcare professional consultation" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <span className="section-eyebrow">Who we are</span>
              <h2 className="section-title">A purpose-driven pharma company</h2>
              <p style={{ color: "var(--text-body)", lineHeight: 1.78, marginBottom: 16 }}>
                BVGK Lifesciences &amp; Healthcare envisions a future where every critically ill
                patient has access to high-quality, affordable therapies and clinical nutrition
                support. Today our portfolio of five anti-infective products serves severe and
                multidrug-resistant bacterial infections in critical care settings, with critical
                care and oncology nutrition ranges launching soon.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.78 }}>
                We aim to build a portfolio rooted in scientific rigor, manufacturing excellence,
                and clinical partnership — becoming a preferred choice for hospitals in critical
                care and nutrition.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values — image + list */}
      <section className="page-frame bg-section">
        <div className="page-container">
          <div className="about-split about-split-reverse">
            <Reveal>
              <span className="section-eyebrow">Quality Assurance</span>
              <h2 className="section-title">What drives every decision</h2>
              <ul className="clean-list" style={{ marginTop: 24 }}>
                {values.map(v => <li key={v}>{v}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="about-img-wrap">
                <img src="/istockphoto-2215511952-1024x1024.jpg" alt="Doctor with patient" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="page-frame">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Leadership</span>
            <h2 className="section-title">The Board of Directors</h2>
            <p className="section-sub">
              Founded and led by people with deep domain experience in clinical medicine and
              pharmaceutical commerce.
            </p>
          </Reveal>
          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <div className="team-card">
                  <div className="team-avatar" style={{ background: m.color }}>
                    {m.initials}
                  </div>
                  <div className="team-info">
                    <h3>{m.name}</h3>
                    <span className="team-role">{m.role}</span>
                    {m.bio && <p>{m.bio}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory & Manufacturing */}
      <section className="page-frame bg-section">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Registered &amp; Regulated</span>
            <h2 className="section-title">Company Snapshot</h2>
          </Reveal>
          <div style={{ marginTop: 40, display: "grid", gap: 16 }}>
            {registry.map((r, i) => (
              <Reveal key={r.label} delay={i * 60}>
                <div className="milestone-row">
                  <span className="milestone-year">{r.label}</span>
                  <span className="milestone-text">{r.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
