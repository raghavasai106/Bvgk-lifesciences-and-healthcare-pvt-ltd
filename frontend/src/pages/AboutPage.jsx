import Reveal from "../components/Reveal";

const values = [
  "GMP & regulatory compliance across every manufacturing partner",
  "Rigorous QA/QC systems and analytical laboratory testing",
  "Stability studies and documentation & data integrity on every batch",
  "Supply reliability and packaging capability hospitals can depend on"
];

const registry = [
  { label: "Founded",         text: "2026, BVGK Lifesciences & Healthcare Pvt Ltd, Secunderabad, Telangana" },
  { label: "Drug License",    text: "Form 20B & Form 21B: TG/HYD/2026-151214" },
  { label: "Manufacturing",   text: "4 WHO-GMP certified CMOs across Himachal Pradesh, Haryana, Gujarat & Maharashtra" },
  { label: "Coverage",        text: "Telangana, Andhra Pradesh, Karnataka & Tamil Nadu, expanding pan-India" }
];

const team = [
  {
    name: "Dr. Bollepalli Vishnu Vardhana Raju",
    role: "Director & Clinical Advisor",
    credentials: "MBBS, DA, IDCCM, EDIC, MBA (Hospital Administration)",
    bio: "A Critical Care Consultant and ICU administrator with expertise spanning sepsis and septic shock management, mechanical ventilation, antimicrobial stewardship, and critical care nutrition. As Director and Clinical Advisor, he provides the clinical and scientific grounding behind BVGK's anti-infective and nutrition portfolio.",
    initials: "BV",
    color: "#01373D"
  },
  {
    name: "Addagulla Ramakrishna",
    role: "Director",
    bio: "Three decades of experience in pharmaceutical industry sales and marketing, training and development, anchoring BVGK's commercial and distribution strategy.",
    initials: "AR",
    color: "#0B4A52"
  },
  {
    name: "Kowlasker Madhavi Sudha",
    role: "Director",
    bio: null,
    initials: "KM",
    color: "#156670"
  },
  {
    name: "Manchana Sravanthi",
    role: "Director",
    bio: null,
    initials: "MS",
    color: "#B10E48"
  },
  {
    name: "Ganesh Kowlasker",
    role: "General Manager, Sales & Marketing",
    bio: "32 years in pharmaceutical sales and business development, from Medical Sales Representative to Assistant General Manager across UCB Pharma, Mylan and Viatris, including building Mylan's HIV Care division from the ground up and growing the Syntocinon brand to over 60% market share. Leads BVGK's sales and marketing strategy.",
    initials: "GK",
    color: "#D6145A"
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
                and clinical partnership, becoming a preferred choice for hospitals in critical
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
            <h2 className="section-title">Board & Leadership Team</h2>
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
                    {m.credentials && <span className="team-credentials">{m.credentials}</span>}
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
