import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const divisions = [
  {
    icon: "🦠",
    title: "Anti-Infectives & Critical Care",
    img: "/piron-guillaume-U4FyCp3-KzY-unsplash.jpg",
    imgAlt: "Surgical team in operating theatre",
    color: "#E8F7F0",
    status: "In Market",
    products: ["EMBLONAM", "ESBLIPERA", "BEVYMER", "TIGINYSE", "PITOBLI"],
    description:
      "Our current portfolio of five injectable anti-infectives for hospital and ICU settings, covering severe and multidrug-resistant bacterial infections. Every product is manufactured through WHO-GMP certified contract manufacturing partners."
  },
  {
    icon: "🍽️",
    title: "Critical Care Nutrition",
    img: "/istockphoto-2261362906-1024x1024.jpg",
    imgAlt: "Clinical nutrition support",
    color: "#FDF5E6",
    status: "Launching Soon",
    products: ["Clinical nutrition formulations", "ICU & post-surgical support"],
    description:
      "A new range in development to support critically ill patients recovering in intensive and post-surgical care — extending BVGK's mission beyond anti-infectives into everyday clinical nutrition."
  },
  {
    icon: "🧬",
    title: "Oncology Nutrition",
    img: "/owen-beard-DK8jXx1B-1c-unsplash.jpg",
    imgAlt: "Medical imaging and radiology",
    color: "#EEF3FA",
    status: "Launching Soon",
    products: ["Nutrition support for chemotherapy", "Long-term recovery support"],
    description:
      "A nutrition range designed to complement chemotherapy and support long-term recovery for oncology patients, currently in development ahead of launch."
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
              BVGK Lifesciences operates in Anti-Infectives &amp; Critical Care today, with
              Critical Care Nutrition and Oncology Nutrition ranges launching soon.
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
                    <span className="chip">{d.status}</span>
                    <h2 className="section-title" style={{ fontSize: "1.6rem", margin: "10px 0 12px" }}>{d.title}</h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.78, marginBottom: 24 }}>{d.description}</p>
                    <div className="service-tags" style={{ background: d.color }}>
                      <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                        {d.status === "In Market" ? "Products" : "Focus Areas"}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {d.products.map(p => (
                          <span key={p} className="product-tag">{p}</span>
                        ))}
                      </div>
                    </div>
                    {d.status === "In Market" ? (
                      <Link to="/products" className="btn btn-outline" style={{ marginTop: 24, display: "inline-flex" }}>
                        View Full Product List →
                      </Link>
                    ) : (
                      <Link to="/contact" className="btn btn-outline" style={{ marginTop: 24, display: "inline-flex" }}>
                        Ask About This Launch →
                      </Link>
                    )}
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
