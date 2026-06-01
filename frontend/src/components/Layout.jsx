import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <div className="top-bar">
        <div className="top-bar-inner">
          <a href="tel:+919676483331">📞 Ganesh Kowlasker - 96764 83331</a>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <NavBar />
      <main className="content-wrap">{children}</main>
      <Footer />
    </div>
  );
}
