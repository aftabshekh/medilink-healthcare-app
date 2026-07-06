import { useState } from "react";

export default function Navbar({ onOpenModal }) {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home", href: "#" },
    { id: "doctors", label: "All Doctors", href: "#doctors" },
    { id: "how", label: "About", href: "#how" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">➕</div>
        <span className="nav-logo-text">
          Medi<span>Link</span>
        </span>
      </a>

      {/* Center Links */}
      <div className="nav-center">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={active === link.id ? "active" : ""}
                onClick={() => setActive(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Button */}
      <div className="nav-btns">
        <button className="btn-create" onClick={() => onOpenModal("signup")}>
          Create Account
        </button>
      </div>
    </nav>
  );
}
