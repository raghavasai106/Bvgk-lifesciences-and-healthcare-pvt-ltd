import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" }
];

export default function NavBar() {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <div className="brand-block">
          <Link to="/" className="brand-logo-link">
            <img src="/bvgk_pharma.jpeg" alt="Sri Sri Shanmukhi Diagnostic" className="brand-logo" />
          </Link>
          <div>
            <p className="brand-name">Sri Sri Shanmukhi Diagnostic</p>
            <p className="brand-subtitle">Authorized Service Provider for Metropolis Pathology Lab</p>
          </div>
        </div>
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
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
