import React, { useState } from "react";
import { Link } from "gatsby";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/factoring", label: "Factoring" },
    { to: "/sobre-nosotros", label: "Sobre nós" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header>
      <div>
        <div>
          <Link to="/" aria-label="3C Capital Home">
            <span>3C CAPITAL</span>
          </Link>
        </div>

        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Link to="/contacto">
            <button type="button">Contáctanos</button>
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div>
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Contáctanos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
