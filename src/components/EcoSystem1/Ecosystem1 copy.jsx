/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
// import Particles from "react-tsparticles";
// import particlesConfig from "../../config/particle-config";
// import particlesBlackConfig from "../../config/pr-s-black";
import Split from "../Split";
// import teamSkillsProgress from "../../common/teamSkillsProgress";
// import tooltipEffect from "../../common/tooltipEffect";
// import teamsDate from "../../data/sections/team.json";

const EcoSystem1 = ({ sliderRef, blackStar }) => {
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
                <span style={{ color: "hsl(0deg ,0% ,100% , 50%)" }}>About</span>
                <h1>
                  <span className="color-font" style={{ lineHeight: "1.595238125", }} >UNCOVERING AGOD’S ECOSYSTEM
                  </span>
                </h1>
                {/* <span>Obtain great benefits and help secure the AGOD Ecosystem.</span> */}
                <br /><br />
                <h6>
                  <span style={{ color: "hsl(0deg ,0%, 100% , 82%)", lineHeight: "1.595238125", }}>Welcome to the ecosystem; Agod is a simple yet powerful universe of interconnected platforms combined with a great minded team behind it. Resulting in a fast, reliable dynamic environment for users and investors to obtain great benefits from it. Utilizing blockchain technology, all transactions are secured in smart contracts allowing users to engage with centralized and decentralized platforms in various ways, gaining the trust of millions of users worldwide.
                    <br />
                    Our ecosystem is an interconnected network of platforms linked by one core token, AGOD. Built to power the entire ecosystem. Users are able to interact and earn rewards among all platforms within.
                  </span>
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
          <section className="min-area mb-30">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-lg-6 valign">
                <div className="content p-0 wow fadeInUp " data-wow-delay=".5s">
                  <div className="skills-box">
                    <div className="skill-item" >
                      <h3 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>AGOD’S ORIGINS</h3>
                      <p style={{ fontSize: "14px", lineHeight: "1.595238125", }}>Agod was born from an idea, a belief that blockchain is here to help us in every aspect of life, to transform and improve our reality. Improving quality of life in our communities through the impact of blockchain. It is not just another trading ecosystem, it is a decentralized investment platform merged with creative development services with a mix of centralized and decentralized trading platforms, for those crypto aficionados.
                        <br />
                        Our team was envisioned by two entrepreneurs looking to maximize investments within blockchain technology services by promoting economic growth and development by facilitating the reach to every user worldwide.
                      </p>
                    </div>
                    {/* ))} */}
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4">
            <div className="img">
            </div>
          </div> */}
            </div>
          </section>
          <h4 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", textAlign: "center", }}>AGOD’s Ecosystem</h4>
          <section className="min-area">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-lg-4">
              </div>
              <div className="col-lg-6 valign">
                <div className="content p-0">
                  {/* <h4 className="custom-font">Benefits</h4> */}
                  <ul>
                    <li className="wow fadeInUp" data-wow-delay=".2s">
                      Agod Token – Agod’s Ecosystem native token. Powering the entire ecosystem. Enabling benefits, transactions and much more.
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      Abloc Exchange – Trade crypto like a professional in a very easy way. Find the most popular crypto coins, buy, sell, earn and build your investment with us.
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      Pandora’s Finance – Earn passive income on your investment and make that idea come true. The best entrepreneur and startup crypto incubator.
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      Dreamhub NFT Marketplace – Fun, creative and artistic NFT marketplace. Create your first NFT collection with us.
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      ADEX - The ecosystem’s decentralized trading platform, with its own governance token. Swap, exchange, earn and more anywhere, anyplace without third party intermediaries.
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      Ra Wallet – Native wallet of the ecosystem. Simple, powerful and user-friendly. Get great rewards by using it!
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      Harmony Ark Foundation – Non-profit organization helping save animals and the earth.
                      <a style={{ color: "#0056b3" }} href="https://harmonyearth.me/" target={"_blank"}>https://harmonyearth.me/</a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      St. Baldrick’s Foundation - Supporting more childhood cancer research grants than any other charity.
                      <a style={{ color: "#0056b3" }} target={"_blank"} href="https://www.stbaldricks.org/" >https://www.stbaldricks.org/</a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      St. Baldrick’s Foundation - Supporting more childhood cancer research grants than any other charity.
                      <a style={{ color: "#0056b3" }} href="https://www.stbaldricks.org/" target={"_blank"}>https://www.stbaldricks.org/</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 mt-30 ">
                <div>
                <p>Agod, born as an ecosystem for the community and accessible to everyone, looks to encourage users to explore the crypto universe and expand their investment horizons and help them find other ways to obtain greater benefits in this evolving world.</p>
                <p>Join us and explore the expanding ecosystem of AGOD, where limitless investment possibilities are there for the taking.</p>
                <p>Get AGOD now.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EcoSystem1;