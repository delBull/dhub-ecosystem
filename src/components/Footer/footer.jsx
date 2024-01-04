/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="item">
              <div className="social">
                <a target={"_blank"} href="https://www.facebook.com/agodespanol ">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a target={"_blank"} href="https://twitter.com/AgodProtocol">
                  <i className="fab fa-twitter"></i>
                </a>
                <a target={"_blank"} href="https://www.instagram.com/AgodProtocol/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a target={"_blank"} href="https://t.me/joinchat/pqK7k1A3rf82NGEx">
                  <i className="fab fa-telegram"></i>
                </a>
                <a target={"_blank"} href="https://www.linkedin.com/company/agodprotocol">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a target={"_blank"} href="https://discord.com/invite/mgnwxa24Ph">
                  <i className="fab fa-discord"></i>
                </a>
                <a target={"_blank"} href="https://agodecosystem.medium.com ">
                  <i className="fab fa-medium"></i>
                </a>
              </div>
              <div className="logo">
                <img src={appData.footerlogo} alt="" />
              </div>
              <div className="copy-right">
                <p>
                  Copyright © AGOD Protocol 2021, Marketing and Media By : &nbsp; <Link
                    href="https://knockout.media/"
                  >
                    <a target="_blank">Knockout Media</a>
                  </Link>
                  .
                </p>
                <p>
                  <Link
                    href="/homepage/terms"
                  >
                    <a target="_blank">Terms of Use</a>
                  </Link>
                  ||
                  <Link
                    href="/homepage/privacy"
                  >
                    <a target="_blank">Privacy Policy</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
