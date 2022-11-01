import React from "react";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-32 bg-black text-white">
        <div>
          <img className="w-11" src={logo} alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <p className="link link-hover">Branding</p>
          <p className="link link-hover">Design</p>
          <p className="link link-hover">Marketing</p>
          <p className="link link-hover">Advertisement</p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <p className="link link-hover">About us</p>
          <p className="link link-hover">Contact</p>
          <p className="link link-hover">Jobs</p>
          <p className="link link-hover">Press kit</p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p className="link link-hover">Terms of use</p>
          <p className="link link-hover">Privacy policy</p>
          <p className="link link-hover">Cookie policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
