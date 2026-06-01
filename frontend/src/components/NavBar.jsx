import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Divisions" },
  { to: "/contact", label: "Contact" }
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`top-nav${scrolled ? " scrolled" : ""}`}>
      <div className="top-nav-inner">
        <div className="brand-block">
          <Link to="/" className="brand-logo-link">
            <img src="/bvgk_pharma.jpeg" alt="BVGK Lifesciences" className="brand-logo" />
          </Link>
          <div>
            <p className="brand-name">BVGK Lifesciences</p>
            <p className="brand-subtitle">and Healthcare Pvt Ltd</p>
          </div>
        </div>
        <nav>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => isActive ? "active-link" : ""}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
