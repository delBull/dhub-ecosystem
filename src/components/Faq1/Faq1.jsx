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
const Faq1 = ({path}) => {
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
      title: content.faqsheading3,
      body: content.faqsheading3Para
    },
    {
      title: content.faqsheading4,
      body: content.faqsheading4Para1,
      body2: content.faqsheading4Para2,
      body3: content.faqsheading4Para3,
    },
    {
      title: content.faqheading5,
      body: content.faqheading5Para1,
      body2: content.faqheading5Para2,
      body3: content.faqheading5Para3,
      body4: content.faqheading5Para4

      // One of the best features of the AGOD token is granting benefits to holders from shared rewards obtained
      // by the ecosystem's treasury, proportional to the amount of AGOD a user is holding. By holding a
      // minimum of 100 AGODs users will be able to obtain a shared daily bonus, from 50% of the ecosystem's
      // daily revenue.

      // AGOD token's structure will work by achieving a burning mechanism, performing quarterly buybacks
      // from the secondary market and burning the purchased amounts. This will be calculated on the
      // ecosystem's monthly performance and overall income. Creating a sustainable environment and
      // stabilizing AGOD's supply to 100 million by the end of the burning program.

      // Additionally to the shared profit benefit, AGOD Ecosystem has created extra benefits for those
      // community holders who believed in AGOD since the pre-launch. AGOD holders will be able to join the
      // exclusive Agoders Club, gaining the best rewards and benefits for holding AGOD. Such as early access to
      // token sales, new upcoming projects and much more. The more you hold the more benefits you receive!
      //       `,
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
    // {
    //   title: "How do I connect my wallet?",
    //   body: false,
    //   List: true,
    //   ul: [
    //     " Visit Agodprotocol.com/get-agod",
    //     "Click on â€œConnect Walletâ€ located on the right hand side of the page",
    //     "To successfully connect your wallet you'll have to be signed in to your wallet",
    //     "Make sure your wallet is compatible with the Fantom Network",
    //   ],
    //   nestedList: true,
    //   links: [
    //     "https://docs.fantom.foundation/tutorials/set-up-metamask",
    //     "https://fantom.foundation/blog/how-to-set-up-your-ledger-nano-s-x-with-fantom/",
    //     "https://fantom.foundation/wallets/#:~:text=Fantom%20is%20fully%20compatible%20with,and%20the%20leading%20mobile%20wallets.&text=fWallet%20is%20Fantom%20Official%20wallet,and%20access%20Fantom%20DeFi%20ecosystem.&text=Metamask%20is%20the%20most%20popular%20software%20wallet%20and%20browser%20extension",
    //   ],
    //   Nestedul: [
    //     `For Metamask wallet follow the next steps`,
    //     `For Ledger wallet follow the next steps`,
    //     `For a full list of compatible Fantom wallets click`,
    //   ],
    // },
    {
      title: content.faqheading7,
      body: content.faqheading7Para1,
      body2: content.faqheading7Para2
    },
    {
      title: content.faqheading8,
      body: content.faqheading8Para
    },
    {
      title: content.faqheading9,
      // Discord: true,
      body: content.faqheading9Para1,
      body2: content.faqheading9Para2
    },
    {
      title: content.faqheading10,
      // Discord2: true,
      body: content.faqheading10Para1,
      body2: content.faqheading10Para2
    },
    {
      title: content.faqheading11,
      // Discord2: true,
      body: content.faqheading11Para1,
      body2: content.faqheading11Para2,
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

export default Faq1;