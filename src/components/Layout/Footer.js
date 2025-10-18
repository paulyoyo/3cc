import React from "react";
import { Link } from "gatsby";
import bgFooter from "../../assets/images/bg-footer.jpg";
import logo from "../../assets/images/logo-3cc-blanco.png";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { platform: "facebook", url: "https://facebook.com", label: "Facebook" },
    { platform: "twitter", url: "https://twitter.com", label: "Twitter" },
    { platform: "linkedin", url: "https://linkedin.com", label: "LinkedIn" },
    { platform: "instagram", url: "https://instagram.com", label: "Instagram" },
  ];

  const contactInfo = {
    title: "Encuéntranos en redes sociales",
    links: socialLinks,
  };

  const legalInfo = {
    title: "Estamos listos de ayudarte",
    items: [
      "Servicios de factoring",
      "Asesoría financiera",
      "Atención personalizada",
    ],
  };

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
              <img src={logo} alt="3C Capital" className="h-12" />
            </Link>
          </div>

          <div className="footer-social">
            <h3 className="text-white text-xl font-normal mb-4">
              {contactInfo.title}
            </h3>
            <ul className="space-y-2">
              {contactInfo.links.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-info">
            <h3 className="text-white text-xl font-normal mb-4">
              {legalInfo.title}
            </h3>
            <ul className="space-y-2">
              {legalInfo.items.map((item, index) => (
                <li key={index} className="text-white/80">
                  {item}
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
