import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>BVGK Lifesciences and Healthcare Pvt Ltd</p>
        <p className="footer-copy">
          Pharmaceutical company specialising in Critical Care, Oncology, and Nutraceuticals.
          Quality products, reliable supply, and healthcare partnerships across India.
        </p>
        <div className="footer-contact">
          <a href="tel:+919676483331">📞 96764 83331</a>
          <Link to="/contact">Inquire Now</Link>
          <Link to="/services">Our Divisions</Link>
        </div>
      </div>
    </footer>
  );
}
