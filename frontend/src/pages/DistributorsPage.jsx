import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Cta from "../components/Cta";

const eligibility = [
  "An established distribution network in your territory",
  "A reliable, well-managed supply chain"
];

const offerings = [
  "Competitive margins",
  "Dedicated sales & marketing support",
  "Access to a growing anti-infective and clinical nutrition portfolio"
];

export default function DistributorsPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Partner With Us</span>
            <h1 className="section-title">Become a BVGK Distributor</h1>
            <p className="section-sub">
              We're expanding our distributor network beyond Telangana, Andhra Pradesh,
              Karnataka, and Tamil Nadu towards pan-India coverage, and we're looking for
              partners to grow with us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-frame">
        <div className="page-container">
          <div className="about-split">
            <Reveal>
              <span className="section-eyebrow">Eligibility</span>
              <h2 className="section-title">What we look for</h2>
              <ul className="clean-list" style={{ marginTop: 24 }}>
                {eligibility.map(e => <li key={e}>{e}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <span className="section-eyebrow">What you get</span>
              <h2 className="section-title">What we offer</h2>
              <ul className="clean-list" style={{ marginTop: 24 }}>
                {offerings.map(o => <li key={o}>{o}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-frame bg-section">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Our Footprint Today</span>
            <h2 className="section-title">10 distributor partners, and growing</h2>
            <p className="section-sub">
              We currently work with 10 distributors across Telangana, Andhra Pradesh,
              Karnataka, and Tamil Nadu, with active plans to expand pan-India.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cta-banner">
        <Reveal>
          <h2>Ready to become a BVGK distributor?</h2>
          <p>Send us your details and territory, and our team will get back to you to discuss partnership terms.</p>
          <Cta to="/contact" variant="primary" arrow hint="Tell us your territory & network">Submit Distributor Inquiry</Cta>
        </Reveal>
      </section>
    </>
  );
}
