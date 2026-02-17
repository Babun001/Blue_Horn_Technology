// import React from "react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../assets/img/Blue_Horn.png";

import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Headerele = [
  { path: "/", pathname: "Home" },
  { path: "/about", pathname: "About" },
  { path: "/product", pathname: "Product" },
  { path: "/contact", pathname: "Contact Us" },
];

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="container">
        <div className={sticky ? "header sticky" : "header"}>
          {/* Topbar */}
          <div className="container">
            <div className="topbar">
              <div className="container">
                <div className="row align-items-center py-3">
                  <div className="col-md-6 topbar-left">
                    <IoCall className="me-2" /> +91 9876543210
                    <span className="mx-3">|</span>
                    <FaEnvelope className="me-2" /> info@example.com
                  </div>

                  <div className="col-md-6 text-md-end topbar-right">
                    <a href="#" className="icn-top me-3">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="icn-top me-3">
                      <FaTwitter />
                    </a>
                    <a href="#" className="icn-top">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navbar */}
          <div className="container">
            <nav className="navbar navbar-expand-lg  d-none d-lg-block bg-col">
              <div className="container ">
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} alt="logo" className="logo" />
                </NavLink>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    {Headerele.map((item, i) => (
                      <li className="nav-item" key={i}>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                          {item.pathname}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <NavLink to="/contact">
                  <button className="animated-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span className="text">Contact Us</span>
                    <span className="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
