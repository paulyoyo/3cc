import React from "react";
import { Link } from "gatsby";
import bgFooter from "@images/bg-footer.jpg";
import logo from "@images/logo-3cc-blanco.png";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const emailContacts = ["negocios1@3ccapital.pe", "negocios2@3ccapital.pe"];

  const EmailIcon = () => (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 inline-block mr-2"
      fill="currentColor"
    >
      <g data-name="8-Email" id="_8-Email">
        <path d="M45,7H3a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3V10A3,3,0,0,0,45,7Zm-.64,2L24,24.74,3.64,9ZM2,37.59V10.26L17.41,22.17ZM3.41,39,19,23.41l4.38,3.39a1,1,0,0,0,1.22,0L29,23.41,44.59,39ZM46,37.59,30.59,22.17,46,10.26Z" />
      </g>
    </svg>
  );

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

          <div className="footer-info">
            <h3 className="text-white text-xl font-normal mb-4">
              Estamos listos de ayudarte
            </h3>
            <ul className="space-y-2">
              {emailContacts.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    aria-label={email}
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                  >
                    <EmailIcon />
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-copyright pt-6 text-center">
          <p className="text-white/80">Copyright {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
