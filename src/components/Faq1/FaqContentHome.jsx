/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Split from "../Split";
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from "react-redux";
// import teamSkillsProgress from "../../common/teamSkillsProgress";
// import tooltipEffect from "../../common/tooltipEffect";
// import teamsDate from "../../data/sections/team.json";
// import Accordion from 'react-bootstrap/Accordion';
// import 'bootstrap/dist/css/bootstrap.min.css';
const FaqContentHome = ({path}) => {
  // React.useEffect(() => {
  //   // teamSkillsProgress();
  //   setTimeout(() => {
  //     tooltipEffect();
  //   }, 1000);
  // }, []);
  const content = useSelector(e => e.ContentReducer.content);

  const [IsOpen, setIsOpen] = useState(false);
  const [Index, setIndex] = useState();
  let data = [
    {
      title: content.faqsheading1,
      //       body: `A blockchain is a distributed public digital ledger. Blockchain technology enables the development of
      // permissionless decentralized applications. In simple words it is a digital system in which transactions are
      // securely recorded and publicly viewed by everyone in the entire network.`,
      body: content.faqsheading1Para,
    },
    {
      title: content.faqsheading2,
      body: content.faqsheading2Para1,
      body2: content.faqsheading2Para2,
      body3: content.faqsheading2Para3,
    },

    {
      title: content.faqsheading4,
      body: content.faqsheading4Para1,
      body2: content.faqsheading4Para2,
      body3: content.faqsheading4Para3,
    },

    {
      title: content.faqheading6,
      body: content.faqheading6Para,
      List: true,
      ul: content.faqheading6Ul,
      // ul: [
      //   "Visit Agodprotocol.com/get-agod",
      //   "Connect your Fantom Wallet ",
      //   "Make sure you have FTM to pay for gas fees",
      //   "Select amount to purchase",
      //   "Buy your AGOD Token",
      // ],
      // nestedList: true,
      links: `${content.faqheading6link1}${content.faqheading6link2}${content.faqheading6link3}`
    },

  ];
  // const
  useEffect(() => {
    console.log(Index, "Index");
    console.log(IsOpen, "IsOpen");
  }, [Index, IsOpen]);
  // const accordionBtns = document?.querySelectorAll(".item-header");

  // accordionBtns.forEach((accordion) => {
  //   accordion.onclick = function () {
  //     this.classList.toggle("active");

  //     let content = this.nextElementSibling;
  //     console.log(content);

  //     if (content.style.maxHeight) {
  //       //this is if the accordion is open
  //       content.style.maxHeight = null;
  //     } else {
  //       //if the accordion is currently closed
  //       content.style.maxHeight = content.scrollHeight + "px";
  //       console.log(content.style.maxHeight);
  //     }
  //   };
  // });
  const [indexActive, setIndexActive] = useState(null)

  return (
    <>
      <div className="team-crv faqSectioon section-padding section-padding-new">
        <div className="">
          <section className="">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-lg-10 col-md-12">
                <div className="content">
                  <Accordion defaultActiveKey="0" onSelect={(e) => setIndexActive(e)}>
                    {data.map((e, i) => {
                      return (
                        // <div className={"active"}>
                        <Accordion.Item eventKey={i} key={i}>
                          <Accordion.Header>
                            <header className={"item-header active"}>
                              <span className="plusSignAcc">
                                {indexActive === i ?
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                  </svg>
                                  :
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                  </svg>
                                }
                              </span>
                              <h3
                                className="custom-font item-question"
                                style={{
                                  fontWeight: "700",
                                  lineHeight: "1.595238125",
                                  fontSize: "1.777rem",
                                }}
                              >
                                {e.title}
                              </h3>
                            </header>
                          </Accordion.Header>
                          <Accordion.Body>
                            {/* <div
                              className={"item-content active"}
                              style={{ marginTop: "0.75rem" }}
                            > */}
                            {/* <p
                                className="item-answer "
                                style={{
                                  fontSize: "1rem",
                                  lineHeight: "1.595238125",
                                  wordWrap: "break-word",
                                  whiteSpace: "pre-wrap",
                                }}
                              > */}
                            {e.body?.length ?
                              <>
                                {e?.body}
                                <br />
                              </>
                              : ""}

                            {e?.body2?.length ?
                              <>
                                {e?.body2}
                                <br />
                              </>

                              : ""}

                            {e?.body3?.length ?
                              <>
                                {e?.body3}
                                <br />

                              </>
                              : ""
                            }
                            {e?.body4?.length ?
                              <>
                                {e?.body4}
                                <br />
                              </>
                              : ""
                            }

                            {/* {e?.Discord ? (
                                  <>
                                    <a
                                      href="https://discord.com/invite/mgnwxa24Ph"
                                      style={{
                                        color: "#0056b3",
                                        marginLeft: "5px",
                                      }}
                                      target={"_blank"}
                                    >
                                      Discord
                                    </a>
                                    <a
                                      href="https://twitter.com/AgodProtocol"
                                      style={{
                                        color: "#0056b3",
                                        marginLeft: "5px",
                                      }}
                                      target={"_blank"}
                                    >
                                      Twitter
                                    </a>{" "}
                                    for more Updates
                                  </>
                                ) : null}
                                {e?.Discord2 ? (
                                  <>
                                    <a
                                      href="https://discord.com/invite/mgnwxa24Ph"
                                      style={{
                                        color: "#0056b3",
                                        marginLeft: "5px",
                                      }}
                                      target={"_blank"}
                                    >
                                      Discord
                                    </a>
                                    <a
                                      href="https://twitter.com/AgodProtocol"
                                      style={{
                                        color: "#0056b3",
                                        marginLeft: "5px",
                                      }}
                                      target={"_blank"}
                                    >
                                      Twitter
                                    </a>
                                  </>
                                ) : null} */}
                            {/* </p> */}
                            <ul className="item-answer">
                              {e?.ul?.map((a, i) => {
                                return (
                                  <li 
                                    className="wow fadeInUp"
                                    data-wow-delay=".2s"
                                  >
                                    {i + 1}: {a}
                                  </li>
                                );
                              })}
                              <ol
                                style={{ listStyleType: "lower-alpha" }}
                                className="container"
                              >
                                {e?.Nestedul?.map((a, i2) => {
                                  let alpha = ["A", "B", "C", "D", "E", "F"];
                                  return (
                                    <li
                                      className="wow fadeInUp"
                                      data-wow-delay=".2s"
                                    >
                                      {alpha[i2]}: {a}{" "}
                                      <a
                                        style={{ color: "#0056b3" }}
                                        target={"_blank"}
                                        href={e?.links[i]}
                                      >
                                        {e?.links[i]}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ol>
                            </ul>
                            {/* </div> */}
                          </Accordion.Body>
                        </Accordion.Item>
                        // </div>
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FaqContentHome;