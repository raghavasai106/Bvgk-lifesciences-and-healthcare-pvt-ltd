import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const divisions = [
  {
    icon: "🫀",
    title: "Critical Care",
    img: "/piron-guillaume-U4FyCp3-KzY-unsplash.jpg",
    imgAlt: "Surgical team in operating theatre",
    color: "#E8F7F0",
    products: ["Injectables", "Infusions", "Supportive therapies", "Emergency medications"],
    description:
      "Life-saving formulations for ICU and emergency settings. Our critical care portfolio covers injectables, infusions, and supportive therapies designed for high-acuity clinical environments where reliability is non-negotiable."
  },
  {
    icon: "🧬",
    title: "Oncology",
    img: "/owen-beard-DK8jXx1B-1c-unsplash.jpg",
    imgAlt: "Medical imaging and radiology",
    color: "#EEF3FA",
    products: ["Chemotherapy agents", "Supportive care", "Anti-emetics", "Pain management"],
    description:
      "Specialised oncology products supporting chemotherapy and supportive care protocols. We ensure consistent availability of oncology formulations for hospitals and cancer treatment centres across India."
  },
  {
    icon: "💊",
    title: "Nutraceuticals",
    img: "/istockphoto-2261362906-1024x1024.jpg",
    imgAlt: "Pharmaceutical supplements and nutraceuticals",
    color: "#FDF5E6",
    products: ["Vitamins & minerals", "Therapeutic nutrition", "Immunity boosters", "Specialty supplements"],
    description:
      "Science-backed nutraceutical products covering vitamins, minerals, and therapeutic nutrition. Designed to complement clinical treatment and support long-term patient wellness outcomes."
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Divisions</span>
            <h1 className="section-title">Three Divisions. One Standard of Quality.</h1>
            <p className="section-sub">
              BVGK Lifesciences operates across Critical Care, Oncology, and Nutraceuticals —
              each built around product quality, reliable distribution, and clinical impact.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-frame">
        <div className="page-container">
          <div style={{ display: "grid", gap: 40 }}>
            {divisions.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="service-card">
                  <div className="service-card-img">
                    <img src={d.img} alt={d.imgAlt} />
                    <div className="service-card-icon">{d.icon}</div>
                  </div>
                  <div className="service-card-body">
                    <h2 className="section-title" style={{ fontSize: "1.6rem", marginBottom: 12 }}>{d.title}</h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.78, marginBottom: 24 }}>{d.description}</p>
                    <div className="service-tags" style={{ background: d.color }}>
                      <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                        Product Categories
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {d.products.map(p => (
                          <span key={p} className="product-tag">{p}</span>
                        ))}
                      </div>
                    </div>
                    <Link to="/contact" className="btn btn-outline" style={{ marginTop: 24, display: "inline-flex" }}>
                      Inquire About {d.title} →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <Reveal>
          <h2>Looking for a specific product or division?</h2>
          <p>Reach out to our team and we'll connect you with the right product specialist.</p>
          <Link className="btn btn-primary" to="/contact">Contact Us</Link>
        </Reveal>
      </section>
    </>
  );
}
