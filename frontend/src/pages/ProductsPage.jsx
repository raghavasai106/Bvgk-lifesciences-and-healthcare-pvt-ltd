import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Cta from "../components/Cta";

const products = [
  {
    brand: "EMBLONAM",
    composition: "Aztreonam 1500 mg + Avibactam 500 mg",
    form: "Vial",
    packSize: "Single Vial",
    indication: "Severe or multidrug resistant bacterial infections"
  },
  {
    brand: "ESBLIPERA",
    composition: "Cefoperazone 1 g + Sulbactam 500 mg",
    form: "Vial",
    packSize: "Single Vial",
    indication: "Moderate to severe bacterial infections"
  },
  {
    brand: "BEVYMER",
    composition: "Meropenem 1 g",
    form: "Vial",
    packSize: "Single Vial",
    indication: "Severe or multidrug resistant bacterial infections"
  },
  {
    brand: "TIGINYSE",
    composition: "Tigecycline 50 mg",
    form: "Vial",
    packSize: "Single Vial",
    indication: "Complicated skin & skin structure infections, complicated intra abdominal infections, community acquired bacterial pneumonia"
  },
  {
    brand: "PITOBLI",
    composition: "Piperacillin 4 g + Tazobactam 500 mg",
    form: "Vial",
    packSize: "Single Vial",
    indication: "Severe bacterial infections of the lungs, abdomen, skin, and urinary tract"
  }
];

const pipeline = [
  {
    image: "/myovhe-hp.jpeg",
    brand: "MYOVHE HP",
    name: "Critical Care Nutrition",
    desc: "High protein, calorie dense nutritional support for critically ill patients in intensive and post surgical care."
  },
  {
    image: "/myovhe-onco.jpeg",
    brand: "MYOVHE ONCO",
    name: "Oncology Nutrition",
    desc: "Advanced nutritional support formulated on ESPEN oncology nutrition guidelines to complement chemotherapy and long term oncology recovery."
  }
];

export default function ProductsPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="inner-hero-bg" style={{ backgroundImage: "url(/myovhe-hp.jpeg)" }} />
        <div className="inner-hero-overlay" />
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Products</span>
            <h1 className="section-title">Our Product Portfolio</h1>
            <p className="section-sub">
              Five WHO GMP manufactured anti infectives for critical care, covering severe and
              multidrug resistant bacterial infections. Composition and indication only;
              pricing is handled by our sales team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-frame">
        <div className="page-container">
          <div className="card-grid">
            {products.map((p, i) => (
              <Reveal key={p.brand} delay={i * 80}>
                <div className="glass-card product-card">
                  <span className="chip">Infectious Disease · {p.form}</span>
                  <h2>{p.brand}</h2>
                  <p className="product-composition">{p.composition}</p>
                  <div className="product-meta">
                    <span><strong>Pack Size:</strong> {p.packSize}</span>
                    <span><strong>Form:</strong> {p.form}</span>
                  </div>
                  <p style={{ marginTop: 12 }}>{p.indication}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="page-frame bg-section">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">In Development</span>
            <h2 className="section-title">Launching Soon</h2>
            <p className="section-sub">
              Two new ranges are in the pipeline, expanding BVGK's portfolio beyond
              anti infectives into clinical nutrition.
            </p>
          </Reveal>
          <div className="why-grid">
            {pipeline.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="why-card pipeline-card">
                  {p.image && (
                    <div className="pipeline-img-wrap">
                      <img src={p.image} alt={p.brand} />
                    </div>
                  )}
                  <h3>{p.name} <span className="chip" style={{ marginLeft: 8 }}>Coming Soon</span></h3>
                  {p.brand && <p className="product-composition">{p.brand}</p>}
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <Reveal>
          <h2>Looking for detailed prescribing information?</h2>
          <p>Reach out to our team for full product information, availability, and commercial terms.</p>
          <Cta to="/contact" variant="primary" hint="Request pricing & availability">Contact Us</Cta>
        </Reveal>
      </section>
    </>
  );
}
