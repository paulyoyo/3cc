import React from "react";
import { Link } from "gatsby";
import bgFooter from "@images/bg-footer.jpg";
import logo from "@images/logo-3cc-blanco.png";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer-section"
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div className="footer-brand">
            <Link to="/" aria-label="3C Capital Home">
              <img src={logo} alt="3C Capital" />
            </Link>
          </div>

          <div className="footer-contact"></div>
        </div>

        <div className="footer-copyright pt-6 text-center">
          <p className="text-white/80">
            Copyright {currentYear} |{" "}
            <Link
              to="/politicas"
              className="text-white/60 hover:text-white text-xs transition-colors"
            >
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
