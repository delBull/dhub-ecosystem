/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const IntroFooter = () => {
  return (
    <footer style={{ padding: "0px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="item">
              <div className="logo">
                <img src={appData.footerlogo} alt="" />
              </div>
              <h3 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>Explore</h3>
              <p className="mb-10" style={{ fontSize: "14px", lineHeight: "1.595238125", }}><h6>Discover AGOD’s Ecosystem</h6>Learn more about the upcoming features and its evolution over time.
                <a style={{ color: "#0056b3", textDecoration: "underline", }} target="_blank">features</a>
              </p>
              <p className="mb-10" style={{ fontSize: "14px", lineHeight: "1.595238125", }}><h6>About Us</h6>Uncover more about who we are, our vision and what we want to achieve
                <a href="https://agodprotocol.netlify.app/Ecosystem/" target={"_blank"} style={{ color: "#0056b3", textDecoration: "underline", }}>About us</a>
              </p>
              <p className="mb-10" style={{ fontSize: "14px", lineHeight: "1.595238125", }}><h5>Resources</h5>Find out answers to your questions about AGOD’s Ecosystem.
                {/* <a href="https://agodprotocol.netlify.app/Ecosystem/" target={"_blank"}>About us</a> */}
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IntroFooter;
