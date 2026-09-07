import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Faq from "../components/Faq";
import Icon from "../components/Icon";
import Cta from "../components/Cta";

const stats = [
  { end: 5,  suffix: "+", label: "Products in Market",   variant: "pink",
    hint: "Five injectable anti infectives, in active use across hospital and ICU settings" },
  { end: 3,  suffix: "",  label: "Therapeutic Divisions", variant: "teal",
    hint: "Anti infectives today, with critical care and oncology nutrition launching soon" },
  { end: 10, suffix: "+", label: "Distributor Partners",  variant: "mint",
    hint: "Active across Telangana, Andhra Pradesh, Karnataka and Tamil Nadu" },
  { end: 4,  suffix: "",  label: "States Covered",        variant: "blush",
    hint: "Expanding from a South India base towards pan India coverage" }
];

const mapPins = [
  { x: 38.94, y: 63.19, city: "Hyderabad", state: "Telangana", hq: true },
  { x: 39.94, y: 69.88, city: "Amaravati", state: "Andhra Pradesh" },
  { x: 27.05, y: 72.81, city: "Bengaluru", state: "Karnataka" },
  { x: 35.97, y: 87.02, city: "Chennai", state: "Tamil Nadu" }
];

const divisions = [
  {
    name: "Anti Infectives & Critical Care",
    img: "/piron-guillaume-U4FyCp3-KzY-unsplash.jpg",
    status: "In Market",
    tag: "5 Products",
    to: "/products"
  },
  {
    name: "Critical Care Nutrition",
    img: "/istockphoto-2261362906-1024x1024.jpg",
    status: "Launching Soon",
    tag: "MYOVHE HP",
    to: "/services"
  },
  {
    name: "Oncology Nutrition",
    img: "/owen-beard-DK8jXx1B-1c-unsplash.jpg",
    status: "Launching Soon",
    tag: "MYOVHE ONCO",
    to: "/services"
  }
];

const faqs = [
  {
    q: "What does BVGK Lifesciences & Healthcare do?",
    a: "BVGK is a pharmaceutical company backed by WHO GMP manufacturing, focused on critical care anti infectives, with critical care and oncology clinical nutrition ranges launching soon. We serve hospitals through ethical engagement grounded in science, not promotion based on sales volume."
  },
  {
    q: "Which regions does BVGK currently serve?",
    a: "We're active across Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu through 10 distributor partners, with pan India expansion underway."
  },
  {
    q: "Is BVGK's manufacturing WHO GMP certified?",
    a: "Yes. Every product is manufactured through 4 WHO GMP certified contract manufacturing partners located in Himachal Pradesh, Haryana, Gujarat, and Maharashtra."
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
  { icon: "shield-check", title: "WHO GMP Manufacturing",  desc: "Every product is manufactured through WHO GMP certified contract manufacturing partners across Himachal Pradesh, Haryana, Gujarat, and Maharashtra." },
  { icon: "flask", title: "Rigorous Quality Checks", desc: "Analytical testing, stability studies, and documentation integrity are verified on every batch before it reaches a hospital shelf." },
  { icon: "truck", title: "Regional Supply Network", desc: "Active across Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu through 10 distributor partners, with pan India expansion underway." },
  { icon: "users", title: "Clinical Leadership",     desc: "Guided by an infectious disease specialist with 20+ years of clinical practice and a leadership team with three decades in pharma sales and marketing." }
];

function StatCounter({ end, suffix, label, variant, hint }) {
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
    <div className={`stat-card stat-card-${variant}`} ref={ref} tabIndex={0}>
      <span className="stat-card-number"><em>{count}</em>{suffix}</span>
      <span className="stat-card-label">{label}</span>
      {hint && <span className="stat-card-hint">{hint}</span>}
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
            <h1 className="hero-title">
              Advancing Health, <span>Enriching Lives</span>
            </h1>
            <p className="hero-sub">
              Delivering WHO GMP manufactured anti infective therapies for critical care,
              with oncology and critical care nutrition ranges launching soon. Trusted by
              hospitals and distributors across South India.
            </p>
            <div className="hero-actions">
              <Cta to="/contact" variant="primary" hint="Get a response within 24 hours">Inquire Now</Cta>
              <Cta to="/products" variant="ghost" hint="Browse our anti infective portfolio">View Products</Cta>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img
              src="/istockphoto-2227757715-1024x1024.jpg"
              alt="Healthcare professional with patient"
            />
            <div className="hero-img-badge">
              <span className="hero-img-badge-num">4</span>
              <span>WHO GMP Certified<br/>Manufacturing Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip — floats over the hero */}
      <section className="stats-strip">
        <div className="stats-strip-inner">
          <div className="stat-card stat-card-photo" tabIndex={0}>
            <img src="/istockphoto-2215511952-1024x1024.jpg" alt="WHO GMP certified manufacturing" />
            <div className="stat-card-photo-caption">
              <span className="stat-card-tag">Quality</span>
              <span>WHO GMP certified manufacturing</span>
              <span className="stat-card-hint">Analytical testing and stability studies verified on every batch</span>
            </div>
          </div>
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
              A focused anti infectives portfolio in market today, with critical care
              and oncology nutrition ranges in active development.
            </p>
          </Reveal>
          <div className="divisions-grid">
            {divisions.map((d, i) => (
              <Reveal key={d.name} delay={i * 120}>
                <div className="division-card">
                  <img className="division-card-bg" src={d.img} alt={d.name} />
                  <div className="division-card-overlay" />
                  <span className="division-card-status">{d.status}</span>
                  <div className="division-card-content">
                    <span className="division-card-tag">{d.tag}</span>
                    <h3>{d.name}</h3>
                    <Link to={d.to} className="card-link">Learn more →</Link>
                  </div>
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
                  <div className="why-icon"><Icon name={r.icon} /></div>
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
                partners, with pan India expansion underway.
              </p>
              <Cta to="/distributors" variant="primary" hint="Join our growing partner network">Become a Distributor</Cta>
            </Reveal>
            <Reveal delay={150}>
              <div className="map-wrap">
                <div className="map-inner">
                  <img src="/india-coverage-map.svg" alt="Map of India highlighting BVGK's coverage across Telangana, Andhra Pradesh, Karnataka and Tamil Nadu" />
                  {mapPins.map(p => (
                    <button
                      key={p.city}
                      type="button"
                      className={`map-pin${p.hq ? " map-pin-hq" : ""}`}
                      style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    >
                      <span className="map-pin-dot" />
                      <span className="map-pin-tooltip">
                        <strong>{p.city}{p.hq && " — HQ"}</strong>
                        <span>{p.state}</span>
                        {p.hq && <span className="map-pin-note">Full address coming soon</span>}
                      </span>
                    </button>
                  ))}
                </div>
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
          <Cta to="/contact" variant="primary" hint="We typically reply within a day">Get in Touch</Cta>
        </Reveal>
      </section>
    </>
  );
}
