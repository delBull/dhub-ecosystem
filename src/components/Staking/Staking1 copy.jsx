/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import CardAddModal from "../Navbar/CardAddModal";
import AgodModal from "../Navbar/GetAgodModal";
import SwapModal from "../Navbar/SwapModal";
// import Particles from "react-tsparticles";
// import particlesConfig from "../../config/particle-config";
// import particlesBlackConfig from "../../config/pr-s-black";
import Split from "../Split";
// import teamSkillsProgress from "../../common/teamSkillsProgress";
// import tooltipEffect from "../../common/tooltipEffect";
// import teamsDate from "../../data/sections/team.json";

const Staking1 = ({ sliderRef, blackStar }) => {
  // React.useEffect(() => {
  //   // teamSkillsProgress();
  //   setTimeout(() => {
  //     tooltipEffect();
  //   }, 1000);
  // }, []);
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
  }, [])


  return (
    <>
      <header ref={sliderRef} className="particles circle-bg valign">
        <div ref={ref} id="container" className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cont text-center">
                <br /><br /><br /><br /><br />
                <span style={{ color: "hsl(0deg ,0% ,100% , 50%)" }}>Earn Rewards</span>
                <h1>
                  <span className="color-font" style={{ lineHeight: "1.595238125", }} >STAKING
                  </span>
                </h1>
                <span>Obtain great benefits and help secure the AGOD Ecosystem.</span>
                <br /><br />
                <h6>
                  <span style={{ color: "hsl(0deg ,0%, 100% , 82%)", lineHeight: "1.595238125", }}>By locking your AGOD tokens you are providing sustainability and security to the ecosystem. This process is called staking; locking your digital assets in the blockchain. Staking helps AGOD’s Ecosystem and in return the ecosystem rewards you with earnings. </span>
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
      <div className="team-crv section-padding">
        <div className="container">
          <section className="min-area">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-lg-6 valign">
                <div className="content">
                  <h4 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>STAKE = SECURE THE ECOSYSTEM = EARN REWARDS</h4>
                  <h6 class="custom-font">Benefits</h6>
                  <ul className="mb-20">
                    <li className="wow fadeInUp" data-wow-delay=".2s">
                      Great way to increase your AGOD holdings
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      Passive income without lots of time invested
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      Funds are deposited in a smart contract
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      No minimum investment required
                    </li>
                  </ul>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      <strong>You'll probably be asking yourself, where do these rewards come from?</strong>
                      <br />
                      Staking gives AGOD token holders rewards from transaction fees generated in the ecosystem.
                      <br />
                      Transaction fees are collected from all Agoders inside the ecosystem and then are distributed through smart contracts to staked AGOD holders.
                    </p>
                  </Split>
                  {/* <br /> */}
                  <h4 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>Ready to earn rewards by staking AGOD?</h4>
                 <button><p>Join the AGOD holders.</p></button> 
                  <br />
                  <span>Stake AGOD now <p style={{fontSize:"12px"}}>*COMING SOON</p></span>
                </div>
              </div>

            </div>
          </section>
        </div>
      
      </div>
    </>
  );
};

export default Staking1;
