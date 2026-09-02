import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Divisions" },
  { to: "/distributors", label: "Distributors" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" }
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 60);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setScrolled(false);
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`top-nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="top-nav-inner">
        <div className="brand-block">
          <Link to="/" className="brand-logo-link">
            <img src="/logo-icon.png" alt="BVGK Lifesciences" className="brand-logo" />
          </Link>
          <div>
            <p className="brand-name">BVGK Lifesciences</p>
            <p className="brand-subtitle">and Healthcare Pvt Ltd</p>
          </div>
        </div>

        <nav className="desktop-nav">
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

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <ul className="mobile-nav-links">
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
    </header>
  );
}
