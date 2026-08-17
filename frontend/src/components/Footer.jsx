import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>BVGK Lifesciences and Healthcare Pvt Ltd</p>
        <p className="footer-copy">
          Anti-infective critical care therapies for hospitals across South India, with
          oncology and critical care nutrition ranges launching soon. Manufactured through
          WHO-GMP certified partners.
        </p>
        <div className="footer-contact">
          <a href="tel:+919676483331">📞 96764 83331</a>
          <a href="tel:+919440113831">📞 94401 13831</a>
          <a href="mailto:info@bvgklifesciences.com">✉ info@bvgklifesciences.com</a>
          <Link to="/products">Products</Link>
          <Link to="/services">Divisions</Link>
          <Link to="/distributors">Become a Distributor</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Inquire Now</Link>
        </div>
        <p className="footer-legal">
          Drug License (Form 20B &amp; 21B): TG/HYD/2026-151214 &nbsp;·&nbsp;
          GSTIN: 36AAOCB0928K1ZE &nbsp;·&nbsp;
          CIN: U86100TS2025PTC206078
        </p>
      </div>
    </footer>
  );
}
