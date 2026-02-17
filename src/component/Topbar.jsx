import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import "./header.css";

function Topbar() {
  return (
    <div className="container">
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-md-6 topbar-left px-5">
              <IoCall className="me-2" /> +91 9876543210
              <span className="mx-3">|</span>
              <FaEnvelope className="me-2" /> info@example.com
            </div>

            <div className="col-md-6 text-md-end topbar-right px-5">
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
  );
}

export default Topbar;
