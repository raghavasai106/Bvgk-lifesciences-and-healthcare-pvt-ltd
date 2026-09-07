import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Cta from "../components/Cta";
import CheckList from "../components/CheckList";

const eligibility = [
  { label: "An established distribution network in your territory",
    detail: "You should already be reaching hospitals and pharmacies across your state or region." },
  { label: "A reliable, well managed supply chain",
    detail: "Consistent stock handling, storage, and delivery timelines your customers can count on." }
];

const offerings = [
  { label: "Competitive margins",
    detail: "Transparent, volume friendly pricing designed to reward long term partners." },
  { label: "Dedicated sales & marketing support",
    detail: "A BVGK representative works directly with your team on outreach and hospital visits." },
  { label: "Access to a growing anti infective and clinical nutrition portfolio",
    detail: "Get early access to new products as our nutrition ranges launch." }
];

export default function DistributorsPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="inner-hero-bg" style={{ backgroundImage: "url(/nappy-J5UTvRgse7Q-unsplash.jpg)" }} />
        <div className="inner-hero-overlay" />
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Partner With Us</span>
            <h1 className="section-title">Become a BVGK Distributor</h1>
            <p className="section-sub">
              We're expanding our distributor network beyond Telangana, Andhra Pradesh,
              Karnataka, and Tamil Nadu towards pan India coverage, and we're looking for
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
              <CheckList items={eligibility} />
            </Reveal>
            <Reveal delay={150}>
              <span className="section-eyebrow">What you get</span>
              <h2 className="section-title">What we offer</h2>
              <CheckList items={offerings} />
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
              Karnataka, and Tamil Nadu, with active plans to expand pan India.
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
