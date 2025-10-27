import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "@images/logo-3cc.png";
import useSticky from "@hooks/useSticky";
import {
  OffCanvas,
  OffCanvasHeader,
  OffCanvasBody,
} from "@components/OffCanvas";
import "./Header.scss";

export default function Header() {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const { sticky, headerRef, fixedRef } = useSticky();

  const toggleOffCanvas = () => {
    setOffCanvasOpen((prev) => !prev);
  };

  const navLinks = [
    { to: "/#factoring", label: "Factoring" },
    { to: "/sobre-nosotros", label: "Sobre nosotros" },
    { to: "/noticias", label: "Blog" },
  ];

  return (
    <>
      <header ref={headerRef} className="relative z-[999] w-full">
        <div
          ref={fixedRef}
          className={`bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
            sticky ? "header__bottom--sticky" : ""
          }`}
        >
          <div className="px-5 flex items-center justify-between h-20 xl:px-10">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center no-underline transition-opacity duration-300 ease hover:opacity-80 leading-[0]">
                <img src={logo} alt="3C Capital Logo" className="h-8 md:h-12" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center mx-10">
              <ul className="flex gap-[35px] list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li key={link.to} className="m-0">
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

            {/* CTA Button - Shows on all screen sizes */}
            <div className="flex items-center gap-3">
              <Link
                to="https://wa.me/51913803964"
                className="header__cta-button header__cta-button--mobile"
              >
                Contactar
              </Link>

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
            </ul>
          </nav>
        </OffCanvasBody>
      </OffCanvas>
    </>
  );
}
