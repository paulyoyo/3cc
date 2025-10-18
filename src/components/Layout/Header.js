import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "@assets/images/logo-3cc.png";
import useSticky from "../../hooks/useSticky";
import { OffCanvas, OffCanvasHeader, OffCanvasBody } from "../OffCanvas";
import "./Header.scss";

export default function Header() {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const { sticky, headerRef, fixedRef } = useSticky();

  const toggleOffCanvas = () => {
    setOffCanvasOpen((prev) => !prev);
  };

  const navLinks = [
    { to: "/factoring", label: "Factoring" },
    { to: "/sobre-nosotros", label: "Sobre nosotros" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <>
      <header ref={headerRef} className="header">
        <div
          ref={fixedRef}
          className={`header__bottom ${sticky ? "header__bottom--sticky" : ""}`}
        >
          <div className="header__container">
            {/* Logo */}
            <div className="header__logo">
              <img src={logo} alt="3C Capital Logo" className="h-8 md:h-12" />
            </div>

            {/* Desktop Navigation */}
            <nav className="header__nav">
              <ul className="header__nav-list">
                {navLinks.map((link) => (
                  <li key={link.to} className="header__nav-item">
                    <Link
                      to={link.to}
                      className="header__nav-link"
                      activeClassName="header__nav-link--active"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="header__cta">
              <Link to="/contacto" className="header__cta-button">
                Contactar
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className={`header__mobile-toggle ${
                offCanvasOpen ? "header__mobile-toggle--open" : ""
              }`}
              onClick={toggleOffCanvas}
              aria-label="Toggle mobile menu"
              aria-expanded={offCanvasOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Menu */}
      <OffCanvas isOpen={offCanvasOpen} onClose={toggleOffCanvas}>
        <OffCanvasHeader onClose={toggleOffCanvas}>
          <Link to="/" onClick={toggleOffCanvas}>
            <img src={logo} alt="3C Capital Logo" className="h-8" />
          </Link>
        </OffCanvasHeader>
        <OffCanvasBody>
          <nav className="offcanvas__nav">
            <ul className="offcanvas__nav-list">
              {navLinks.map((link) => (
                <li key={link.to} className="offcanvas__nav-item">
                  <Link
                    to={link.to}
                    className="offcanvas__nav-link"
                    activeClassName="offcanvas__nav-link--active"
                    onClick={toggleOffCanvas}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="offcanvas__nav-item">
                <Link
                  to="/contacto"
                  className="offcanvas__nav-cta"
                  onClick={toggleOffCanvas}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </OffCanvasBody>
      </OffCanvas>
    </>
  );
}
