import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>Sri Sri Shanmukhi Diagnostic Centre</p>
        <p className="footer-copy">
          Authorized service provider for{" "}
          <a href="https://www.metropolisindia.com/" target="_blank" rel="noopener noreferrer" className="footer-metropolis-link">Metropolis Pathology Lab</a>.
          NABL & CAP accredited. Laboratory services, gene diagnostics, and health checkups with accuracy and care.
        </p>
        <div className="footer-contact">
          <a href="tel:+919676483331">📞 Ganesh Kowlasker - 96764 83331</a>
          <a href="https://www.metropolisindia.com/" target="_blank" rel="noopener noreferrer">Metropolis India</a>
          <Link to="/contact">Contact Us</Link>
          <Link to="/services">Our Services</Link>
        </div>
      </div>
    </footer>
  );
}
