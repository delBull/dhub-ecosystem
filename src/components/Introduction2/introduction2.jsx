/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector } from "react-redux";
import { addContent } from "../../store/Constant";
import Split from "../Split";
// import teamSkillsProgress from "../../common/teamSkillsProgress";
// import tooltipEffect from "../../common/tooltipEffect";
// import teamsDate from "../../data/sections/team.json";

const Introduction2 = () => {
  const content = useSelector(e => e.ContentReducer.content)
  // React.useEffect(() => {
  //   // teamSkillsProgress();
  //   setTimeout(() => {
  //     tooltipEffect();
  //   }, 1000);
  // }, []);
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row mb-30" style={{ justifyContent: "center" }}>
          <div className="col-lg-4 valign col-sm-12 ">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="skills-box">
                <div className="skill-item" >
                  <h3 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>{addContent(content.learnheading1).map((a, i) => (
                    <>
                      {a}
                      <br />
                    </>
                  ))}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.595238125", }}>{addContent(content.learnheading1Para).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
                  </p>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="img">
              {/* <img
                src="/img/nucleo.svg"
                alt=""
              /> */}
            </div>
          </div>
        </div>
        <div className="row mb-30" style={{ justifyContent: "center" }}>
          <div className="col-lg-4 col-sm-12">
            <div className="img">
              {/* <img
                src="/img/nucleo.svg"
                alt=""
              /> */}
            </div>
          </div>
          <div className="col-lg-4 valign col-sm-12">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="skills-box">
                <div className="skill-item" >
                  <h3 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>{addContent(content.learnheading2).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.595238125", }}>{addContent(content.learnheading2Para).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
                  </p>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-30" style={{ justifyContent: "center" }}>
          <div className="col-lg-4 valign col-sm-12">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="skills-box">
                <div className="skill-item" >
                  <h3 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>Value</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.595238125", }}>
                    Decentralized platforms are autonomous social networks which benefit and create value for all investors. Agod’s Ecosystem offers both decentralized and centralized platforms for users, creators, artists, and investors to choose from; each, offering different types of benefits. All users are free to choose to benefit from one or from all regardless of their economic status.
                  </p>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="img">
              {/* <img
                src="/img/nucleo.svg"
                alt=""
              /> */}
            </div>
          </div>
        </div>
        <div className="row mb-30" style={{ justifyContent: "center" }}>
          <div className="col-lg-4 col-sm-12">
            <div className="img">
            </div>
          </div>
          <div className="col-lg-4 valign col-sm-12">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="skills-box">
                <div className="skill-item" >
                  <h3 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>Marketplace</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.595238125", }}>The Ecosystem’s exchange allows users to find unique collectibles, not just trade cryptocurrencies, also digital art, NFT’s, and more crypto assets, adding value to the ecosystem and creating infinite opportunities to those within Agod’s Ecosystem.
                  </p>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-30" style={{ justifyContent: "center" }}>
          <div className="col-lg-5 valign col-sm-12">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="skills-box">
                <div className="skill-item" >
                  <h3 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>The AGOD Token</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.595238125", }}>Economy backed by The AGOD token. All these services are chained to AGOD’s Ecosystem’s Token $AGOD. The service provider of connectivity, adding economic value, security and providing sustainability to all services and digital assets in the ecosystem. Featuring long term investments thus stabilizing the treasury and building the foundation for the entire ecosystem’s platforms.
                    <br />The AGOD Token is the native token of the ecosystem. With which you are able to interconnect and obtain benefits in all its economy. Agod Token secures all the ecosystem and rewards are distributed among Agoders, by staking and having transaction fees the economy allows users to benefit from it and maximize their investments.
                  </p>
                  <div className="Parent mt-15 mb-15">
                    <button className="btn Get mr-15" style={{ padding: "0.675rem 0.95rem" }}>
                      GET AGOD
                      <span className="icon pe-7s-angle-right"></span>
                    </button>
                    <button className="btn Stake" style={{ background: "transparent", color: "#fff", marginLeft: "10px" }}>
                      STAKE AGOD
                      <span className="icon pe-7s-angle-right"></span>
                    </button>
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>
        <section className="min-area">
          <div className="row" style={{ justifyContent: "center" }}>
            {/* <div className="col-lg-6">
            <div className="img">
              <img
                src="/img/min-area.svg"
              />
            </div>
          </div> */}
            <div className="col-lg-6 valign col-sm-12">
              <div className="content p-0">
                <h4 className="color-font">Technology</h4>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    <strong>Agod Ecosystem built in Fantom, aiming to be a next gen multichain ecosystem.</strong>
                    <br />
                    <strong>Building our own Blockchain</strong>. AGOD is a secure, fast and reliable ecosystem aiming to build its own blockchain to offer users extremely lower costs and faster transactions
                  </p>
                </Split>
                <ul>
                  <li className="wow fadeInUp" data-wow-delay=".2s">
                    Multichain
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    Open-source smart contract platform
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    Fast Performance
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    Instant Transactions
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    Very Low Fees
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    Secure and highly scalable
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    Ethereum compatible
                  </li>
                </ul>
                {/* <br /> */}
              </div>
            </div>
          </div>
        </section>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-lg-5 col-sm-12 valign">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="skills-box mt-40">
                <div className="skill-item" >
                  <h3 className="custom-font" style={{ fontWeight: "700", lineHeight: "1.595238125", }}>Excited to be part of the AGOD’s Ecosystem?</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.595238125", }}>Join us now, there are multiple ways to invest and earn rewards. You can start by acquiring AGOD Token, the ecosystem’s native coin which secures and governs the ecosystem by helping it evolve and expand beyond our borders enhancing tools and collection of dapps and services for you to earn more rewards from your investment.
                  </p>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction2;
