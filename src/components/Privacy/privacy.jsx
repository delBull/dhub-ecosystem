import React, { useState } from "react";
import Link from "next/link";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import {useRef, useEffect} from 'react';


const Privacy = ({ sliderRef, blackStar }) => {
  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    console.log(el2);

    // 👇️ use document.getElementById()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const el = document.getElementById('container');
    console.log(el);
  }, []);
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div ref={ref} id="container" className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
            <br /><br /><br /><br /><br />
              <h1>
                <span className="color-font">AGOD Ecosystem</span><br /><br /> Privacy & Cookies Policy <br />
              </h1>
              <br /><br />
              <h6>
              <span>We AGOD Ecosystem (agodecosystem.com), are committed to protecting any data that we collect concerning you. By using our services you agree to the use of the data that we collect in accordance with this Privacy Policy.
We are committed to protecting your privacy.
We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy to enable you to understand which personal identifying information (“PI”, “Personal Information”) of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.
Information Collected
We may collect any or all of the information that via both automated means such as communications profiles and cookies. Personal Information you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number, fax number and email address, dates of service provided, types of service provided, payment history, manner of payment, amount of payments, date of payments, domain name or other payment information. All sensitive information is collected on a secure server and data is transferred . When transferring personal information a security icon will appear in your browser.
Information Use
This information is used for billing and to provide service and support to our customers. We may also study this information to determine our customers needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorized access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details. RunePay may email its monthly newsletter to the primary contact e-mail on file, but customers are able to opt out of this newsletter at any time.
We use IP addresses to analyze trends, administer our site and servers, track access, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. It is possible that personal information about a customer may be included in the log files due to the normal functions of IP addresses and SaaS applications.
Cookies
Your Internet browser has the in-built facility for storing small text files – “cookies” – that hold information which allows a website to recognize your account. We use cookies to save your preferences and login information, and provide personalized functionality. You can reject cookies by changing your browser settings, but be aware that this will disable some of the functionality on the AGOD Ecosystem website. More information about cookies can be found at https://en.wikipedia.org/wiki/HTTP_cookie.</span>
              </h6>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      {/* <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      /> */}

        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Privacy;
