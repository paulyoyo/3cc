import React from "react";
import { Link } from "gatsby";

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
    <footer>
      <div>
        <div>
          <div>
            <Link to="/" aria-label="3C Capital Home">
              <span>3C CAPITAL</span>
            </Link>
          </div>

          <div>
            <h3>{contactInfo.title}</h3>
            <ul>
              {contactInfo.links.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <span data-icon={social.platform}>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{legalInfo.title}</h3>
            <ul>
              {legalInfo.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p>Copyright {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
