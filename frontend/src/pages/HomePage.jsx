import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const stats = [
  { end: 50,  suffix: "+", label: "Products" },
  { end: 3,   suffix: "",  label: "Divisions" },
  { end: 100, suffix: "+", label: "Healthcare Partners" },
  { end: 15,  suffix: "+", label: "States Covered" }
];

const divisions = [
  {
    icon: "🫀",
    name: "Critical Care",
    img: "/piron-guillaume-U4FyCp3-KzY-unsplash.jpg",
    desc: "Life-saving formulations for ICU and emergency settings — injectables, infusions, and supportive therapies built for high-acuity clinical environments.",
    to: "/services"
  },
  {
    icon: "🧬",
    name: "Oncology",
    img: "/owen-beard-DK8jXx1B-1c-unsplash.jpg",
    desc: "Specialised oncology formulations supporting chemotherapy and supportive care protocols with consistent quality and uninterrupted supply.",
    to: "/services"
  },
  {
    icon: "💊",
    name: "Nutraceuticals",
    img: "/istockphoto-2261362906-1024x1024.jpg",
    desc: "Science-backed vitamins, minerals, and therapeutic nutrition that bridges clinical treatment and long-term patient wellness.",
    to: "/services"
  }
];

const reasons = [
  { icon: "✅", title: "GMP Compliant",       desc: "All products manufactured in GMP-certified facilities, ensuring every batch meets strict quality benchmarks." },
  { icon: "🚚", title: "Pan-India Supply",    desc: "Reliable distribution covering 15+ states — so the right product reaches the right place on time." },
  { icon: "🔬", title: "R&D Focused",         desc: "Continuous investment in formulation development keeps our portfolio clinically relevant and competitive." },
  { icon: "🤝", title: "Strong Partnerships", desc: "Long-term trust-based relationships with hospitals, distributors, and healthcare professionals across India." }
];

function StatCounter({ end, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const step = end / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number"><em>{count}</em>{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="hero">
        <div className="hero-deco hero-deco-1" />
        <div className="hero-deco hero-deco-2" />
        <div className="hero-deco hero-deco-3" />
        <div className="hero-content hero-split">
          <div className="hero-text">
            <p className="hero-eyebrow">BVGK Lifesciences and Healthcare Pvt Ltd</p>
            <h1 className="hero-title">
              Pharmaceutical Products Built for <span>Critical Outcomes</span>
            </h1>
            <p className="hero-sub">
              Delivering quality-driven products across Critical Care, Oncology, and Nutraceuticals.
              Trusted by healthcare professionals and institutions across India.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">Inquire Now</Link>
              <Link className="btn btn-ghost" to="/services">Our Divisions</Link>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img
              src="/istockphoto-2227757715-1024x1024.jpg"
              alt="Healthcare professional with patient"
            />
            <div className="hero-img-badge">
              <span className="hero-img-badge-num">10+</span>
              <span>Years of<br/>Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="stats-bar">
        <div className="stats-inner">
          {stats.map(s => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* Divisions */}
      <section className="page-frame">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">What we do</span>
            <h2 className="section-title">Three Divisions. One Standard of Quality.</h2>
            <p className="section-sub">
              Each division is built around a commitment to product efficacy, reliable
              distribution, and meaningful clinical impact.
            </p>
          </Reveal>
          <div className="divisions-grid">
            {divisions.map((d, i) => (
              <Reveal key={d.name} delay={i * 120}>
                <div className="division-card">
                  <div className="division-card-img">
                    <img src={d.img} alt={d.name} />
                  </div>
                  <div className="division-icon">{d.icon}</div>
                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>
                  <Link to={d.to} className="card-link">Learn more →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="page-frame bg-section">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Why BVGK</span>
            <h2 className="section-title">Built on Trust. Delivered with Precision.</h2>
          </Reveal>
          <div className="why-grid" style={{ marginTop: 40 }}>
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="why-card">
                  <div className="why-icon">{r.icon}</div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <Reveal>
          <h2>Ready to Partner with BVGK Lifesciences?</h2>
          <p>Whether you're a distributor, hospital, or healthcare professional — let's connect and build something impactful.</p>
          <Link className="btn btn-primary" to="/contact">Get in Touch</Link>
        </Reveal>
      </section>
    </>
  );
}
