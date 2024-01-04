import React, { useState } from "react";
import Link from "next/link";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import { useRef, useEffect } from 'react';


const Introduction1 = ({ sliderRef, blackStar }) => {
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
              <span style={{ color: "hsl(0deg ,0% ,100% , 50%)" }}>Introduction</span>
              <h1>
                <span className="color-font" style={{  lineHeight: "1.595238125", }} >WELCOME TO AGOD
                </span>
              </h1>
              <br /><br />
              <h6>
                <span style={{ color: "hsl(0deg ,0%, 100% , 82%)" ,lineHeight: "1.595238125",}}>AGOD is a rapidly expanding smart investment ecosystem with interconnected applications  focused on connecting users to community developed projects
                  There are currently many ecosystems which provide blockchain services, metaverses, and much more, but we pride ourselves for offering, users and investors, a combined ecosystem in which you’ll have the best from both worlds, investment applications, centralized exchange, decentralized exchanges (dApps), as well as fun creative ones in which NFTs have a say.
                  We believe that blockchain is for everyone, and everyone has a chance of improving their way of life. AGOD focuses on operability and accessibility so you will have the opportunity of enhancing your portfolio and having more control of your investments.
                  .</span>
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

export default Introduction1;
