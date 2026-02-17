// src/components/Footer.jsx
import logo from "../assets/img/Blue_Horn.png";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

// import "./footer.css";

const topContacts = [
  {
    title: "Support & Email",
    value: "info@domainname.com",
    icon: <FaEnvelope />,
  },
  {
    title: "Customer Support",
    value: "+01547 547 5478",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Our Location",
    value: "Street no, City, Country",
    icon: <FaMapMarkerAlt />,
  },
];

const quickLinks = ["Home", "About Us", "Services", "Blog", "Contact Us"];

const services = [
  "Hybrid Energy",
  "Renewable Energy",
  "Solar Maintenance",
  "Solar PV Systems",
  "Solar Solutions",
];

const usefulLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Warranty",
  "Support",
  "Damage Policy",
];

const socials = [
  <FaFacebookF />,
  <FaLinkedinIn />,
  <FaTwitter />,
  <FaInstagram />,
];

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        {/* TOP BAR */}
        <div className="footer-top">
          {topContacts.map((item, i) => (
            <div className="top-item" key={i}>
              <span className="f-icn">{item.icon}</span>
              <div>
                <h5>{item.title}</h5>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="footer-content container">
          {/* BRAND */}
          <div>
            <img src={logo} alt="Solor Logo" className="footer-logo" />
            <p className="py-3">
              Green Energy is a long established fact that a reader will be
              distracted by the readable content of a page when.
            </p>

            <div className="socials">
              {socials.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h4>Useful Links</h4>
            <ul>
              {usefulLinks.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          Copyright © {new Date().getFullYear()} Solor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
