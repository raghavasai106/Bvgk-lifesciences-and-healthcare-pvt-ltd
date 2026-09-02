import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Faq from "../components/Faq";

const stats = [
  { end: 5,  suffix: "+", label: "Products in Market" },
  { end: 3,  suffix: "",  label: "Therapeutic Divisions" },
  { end: 10, suffix: "+", label: "Distributor Partners" },
  { end: 4,  suffix: "",  label: "States Covered" }
];

const divisions = [
  {
    icon: "🦠",
    name: "Anti-Infectives & Critical Care",
    img: "/piron-guillaume-U4FyCp3-KzY-unsplash.jpg",
    desc: "Our current portfolio: five injectable anti-infectives for severe and multidrug-resistant bacterial infections, trusted in ICU and hospital settings.",
    to: "/products"
  },
  {
    icon: "🍽️",
    name: "Critical Care Nutrition",
    img: "/istockphoto-2261362906-1024x1024.jpg",
    desc: "Launching soon: clinical nutrition support built for critically ill patients recovering in intensive and post-surgical care.",
    to: "/services"
  },
  {
    icon: "🧬",
    name: "Oncology Nutrition",
    img: "/owen-beard-DK8jXx1B-1c-unsplash.jpg",
    desc: "Launching soon: nutrition support designed to complement chemotherapy and long-term recovery for oncology patients.",
    to: "/services"
  }
];

const faqs = [
  {
    q: "What does BVGK Lifesciences & Healthcare do?",
    a: "BVGK is a WHO-GMP manufacturing-backed pharmaceutical company focused on critical care anti-infectives, with critical care and oncology clinical nutrition ranges launching soon. We serve hospitals through ethical, science-led engagement rather than volume-driven promotion."
  },
  {
    q: "Which regions does BVGK currently serve?",
    a: "We're active across Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu through 10 distributor partners, with pan-India expansion underway."
  },
  {
    q: "Is BVGK's manufacturing WHO-GMP certified?",
    a: "Yes. Every product is manufactured through 4 WHO-GMP certified contract manufacturing partners located in Himachal Pradesh, Haryana, Gujarat, and Maharashtra."
  },
  {
    q: "How can I become a BVGK distributor?",
    a: "We look for partners with an established network and supply chain in their territory. In return, BVGK offers competitive margins and sales support. Visit our Become a Distributor page to get started."
  },
  {
    q: "Does BVGK hire Medical Representatives?",
    a: "Yes, we're actively hiring Medical Representatives across Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu. Check our Careers page for current openings."
  },
  {
    q: "How can hospitals or doctors get detailed prescribing information?",
    a: "Reach out through our Contact page, and our team will respond with full product information, availability, and commercial terms."
  }
];

const reasons = [
  { icon: "✅", title: "WHO-GMP Manufacturing",  desc: "Every product is manufactured through WHO-GMP certified contract manufacturing partners across Himachal Pradesh, Haryana, Gujarat, and Maharashtra." },
  { icon: "🔬", title: "Rigorous Quality Checks", desc: "Analytical testing, stability studies, and documentation integrity are verified on every batch before it reaches a hospital shelf." },
  { icon: "🚚", title: "Regional Supply Network", desc: "Active across Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu through 10 distributor partners, with pan-India expansion underway." },
  { icon: "🤝", title: "Clinical Leadership",     desc: "Guided by an infectious disease specialist with 20+ years of clinical practice and a leadership team with three decades in pharma sales and marketing." }
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
              Advancing Health, <span>Enriching Lives</span>
            </h1>
            <p className="hero-sub">
              Delivering WHO-GMP manufactured anti-infective therapies for critical care,
              with oncology and critical care nutrition ranges launching soon. Trusted by
              hospitals and distributors across South India.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">Inquire Now</Link>
              <Link className="btn btn-ghost" to="/products">View Products</Link>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img
              src="/istockphoto-2227757715-1024x1024.jpg"
              alt="Healthcare professional with patient"
            />
            <div className="hero-img-badge">
              <span className="hero-img-badge-num">4</span>
              <span>WHO-GMP Certified<br/>Manufacturing Partners</span>
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
              A focused anti-infectives portfolio in market today, with critical care
              and oncology nutrition ranges in active development.
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

      {/* Regional Presence */}
      <section className="page-frame">
        <div className="page-container">
          <div className="about-split">
            <Reveal>
              <span className="section-eyebrow">Where We Operate</span>
              <h2 className="section-title">Regional Presence Across South India</h2>
              <p style={{ color: "var(--text-body)", lineHeight: 1.78, marginTop: 16, marginBottom: 28 }}>
                Headquartered in Secunderabad, Telangana, BVGK's portfolio is active across
                Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu through 10 distributor
                partners, with pan-India expansion underway.
              </p>
              <Link className="btn btn-primary" to="/distributors">Become a Distributor</Link>
            </Reveal>
            <Reveal delay={150}>
              <div className="map-wrap">
                <img src="/india-coverage-map.svg" alt="Map of India highlighting BVGK's coverage across Telangana, Andhra Pradesh, Karnataka and Tamil Nadu" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-frame bg-section">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Frequently Asked</span>
            <h2 className="section-title">Questions About BVGK</h2>
            <p className="section-sub">
              Answers to what hospitals, distributors, and prospective team members ask us most.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <Reveal>
          <h2>Ready to Partner with BVGK Lifesciences?</h2>
          <p>Whether you're a distributor, hospital, or healthcare professional, let's connect and build something impactful.</p>
          <Link className="btn btn-primary" to="/contact">Get in Touch</Link>
        </Reveal>
      </section>
    </>
  );
}
