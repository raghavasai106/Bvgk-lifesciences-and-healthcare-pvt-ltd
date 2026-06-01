import Reveal from "../components/Reveal";

const values = [
  "Consistent product quality across all therapeutic segments",
  "Reliable supply chain and distribution partnerships",
  "Compliance with GMP and regulatory standards",
  "Patient outcomes at the centre of every decision"
];

const milestones = [
  { year: "2020", text: "BVGK Lifesciences incorporated with a focus on Critical Care." },
  { year: "2021", text: "Expanded into Oncology segment with key hospital partnerships." },
  { year: "2022", text: "Launched Nutraceuticals division to address wellness gaps." },
  { year: "2024", text: "Pan-India distribution network covering 15+ states." }
];

const team = [
  {
    name: "Ganesh Kowlasker",
    role: "Co-Founder",
    email: "ganesh.kowlasker@bvgklifesciences.com",
    linkedin: "https://www.linkedin.com/in/ganesh-kowlasker-05004435/",
    phone: "+91 96764 83331",
    bio: "Ganesh brings over a decade of experience in pharmaceutical sales, distribution, and healthcare partnerships across India. His deep domain expertise and trusted relationships with hospital networks and distributors form the commercial backbone of BVGK Lifesciences. He has built and led high-performing field teams across Telangana and Andhra Pradesh, driving consistent growth in Critical Care and Oncology segments.",
    initials: "GK",
    color: "#004433"
  },
  {
    name: "Raghavasai Kowlasker",
    role: "Director of Engineering",
    email: "raghavasai.kowlasker@bvgklifesciences.com",
    linkedin: null,
    phone: null,
    bio: "Raghavasai leads the technology function at BVGK Lifesciences, building the digital infrastructure that powers operations, distribution tracking, and partner integrations. He brings software engineering expertise to modernise how the company manages its product catalogue, inquiries, and internal workflows.",
    initials: "RK",
    color: "#006644"
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
              BVGK Lifesciences and Healthcare Pvt Ltd is a pharmaceutical company focused on
              bringing quality-driven products to healthcare professionals and institutions across India.
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
                We operate across three core divisions — Critical Care, Oncology, and Nutraceuticals —
                ensuring both clinical efficacy and supply reliability for every product we carry.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.78 }}>
                Our mission is to support better patient outcomes through consistent product quality,
                ethical business practices, and strong partnerships with the healthcare ecosystem.
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
              <span className="section-eyebrow">Our Values</span>
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
            <h2 className="section-title">The team behind BVGK</h2>
            <p className="section-sub">
              Founded and led by people with deep domain experience in pharma and technology.
            </p>
          </Reveal>
          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 150}>
                <div className="team-card">
                  <div className="team-avatar" style={{ background: m.color }}>
                    {m.initials}
                  </div>
                  <div className="team-info">
                    <h3>{m.name}</h3>
                    <span className="team-role">{m.role}</span>
                    <p>{m.bio}</p>
                    <div className="team-links">
                      <a href={`mailto:${m.email}`} className="team-link">✉ {m.email}</a>
                      {m.phone && <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="team-link">📞 {m.phone}</a>}
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="team-link team-linkedin">
                          in LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="page-frame bg-section">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">Key Milestones</h2>
          </Reveal>
          <div style={{ marginTop: 40, display: "grid", gap: 16 }}>
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 80}>
                <div className="milestone-row">
                  <span className="milestone-year">{m.year}</span>
                  <span className="milestone-text">{m.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
