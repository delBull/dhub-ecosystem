/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import tooltipEffect from "../../common/tooltipEffect";
import appData from "../../data/app.json";
import { useSelector } from "react-redux";
import { addContent, spaceBetween } from "../../store/Constant";
import AgodToken from "../Agod-Token/AgodToken";

const Team = ({ textTeamSecActive, textTeamSec2Active }) => {
  const [ShowMore, setShowMore] = useState(false);
  const content = useSelector((e) => e.ContentReducer.content);
  let styleShowMOre = {
    cursor: "pointer",
    position: "absolute",
    top: ShowMore ? "92%" : "0%",
    transition: "0.4s",
  };
  React.useEffect(() => {
    teamSkillsProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  const textTeamSec = useRef(null);
  const textTeamSec2 = useRef(null);

  useEffect(() => {
    if (textTeamSecActive) {
      if (document.getElementById("textTeamSecInner1")) {
        document.getElementById("textTeamSecInner1").classList.add("active");
      }
      setTimeout(() => {
        if (document.getElementById("textAnimationDiv1")) {
          document.getElementById("textAnimationDiv1").classList.add("active");
        }
        if (document.getElementById("textAnimationDivh31")) {
          document
            .getElementById("textAnimationDivh31")
            .classList.add("active");
        }
        if (document.getElementById("textAnimationDivhp1")) {
          document
            .getElementById("textAnimationDivhp1")
            .classList.add("active");
        }
      }, 500);
    }
    // else {
    //   if (textTeamSec.current.previousElementSibling.classList) {
    //     textTeamSec.current.previousElementSibling.classList.remove('active')
    //   }
    //   if (textTeamSec.current.previousElementSibling.previousElementSibling) {
    //     textTeamSec.current.previousElementSibling.previousElementSibling.firstChild.classList.remove('active')
    //   }
    //   if (textTeamSec.current.previousElementSibling.previousElementSibling) {
    //     textTeamSec.current.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.classList.remove('active')
    //   }
    //   if (textTeamSec.current.previousElementSibling.previousElementSibling) {
    //     textTeamSec.current.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.classList.remove('active')
    //   }
    // }
  }, [textTeamSecActive]);

  useEffect(() => {
    if (textTeamSec2Active) {
      if (document.getElementById("textTeamSecInner2")) {
        document.getElementById("textTeamSecInner2").classList.add("active");
      }
      setTimeout(() => {
        if (document.getElementById("textAnimationDiv2")) {
          document.getElementById("textAnimationDiv2").classList.add("active");
        }
        if (document.getElementById("textAnimationDivh32")) {
          document
            .getElementById("textAnimationDivh32")
            .classList.add("active");
        }
        if (document.getElementById("textAnimationDivp2")) {
          document.getElementById("textAnimationDivp2").classList.add("active");
        }
      }, 500);
    }
    // else {
    //   if (textTeamSec2.current.previousElementSibling) {
    //     textTeamSec2.current.previousElementSibling.classList.remove('active')
    //   }
    //   if (textTeamSec2.current.previousElementSibling) {
    //     textTeamSec2.current.previousElementSibling.previousElementSibling.firstChild.classList.remove('active')
    //   }
    //   if (textTeamSec2.current.previousElementSibling) {
    //     textTeamSec2.current.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.classList.remove('active')
    //   }
    //   if (textTeamSec2.current.previousElementSibling) {
    //     textTeamSec2.current.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.classList.remove('active')
    //   }
    // }
  }, [textTeamSec2Active]);

  return (
    <>
      <div className="temTopText headingMain showHeadMain">
        <div className="decentralizeApplication">
          <p className="para">{spaceBetween(content.homeheading)[0]}</p>
          <p className="para">{spaceBetween(content.homeheading)[1]}</p>
          <p className="">{spaceBetween(content.homeheading)[2]}</p>
        </div>
        <h4>
          <span className="temTopTextfirstText">
            <div>

              {addContent(content.homesectionPara1).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </div>
          </span>
          <span className="temTopTextfirstText">
            <div>

              {addContent(content.homesectionPara2).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </div>
          </span>
          <span className="temTopTextSecondText">
            <div>
              {addContent(content.homesectionPara3).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </div>
          </span>
          <span className="temTopTextSecondText">
            <div>

              {addContent(content.homesectionPara4).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </div>
          </span>
        </h4>
      </div>
      <AgodToken />

      <div className="teamSection section">
        <div className="innerTeamSection">
          <div className="textTeamSec" id="textTeamSec">
            <div className="textTeamSecInner" id="textTeamSecInner1">
              <div className="textAnimationDiv" id="textAnimationDiv1"></div>
              <div className="sepratorImageInverDiv">
                <img
                  className="sepratorImage sepratorImageInver "
                  src="/img/newassets/separatorLR.png"
                />
              </div>
              {/* <h3 id="textAnimationDivh31">
                Limited Supply 100 M
              </h3> */}
              <h3 id="textAnimationDivh31">
                {addContent(content.homesectionCommunity).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </h3>
              {/* <p id="textAnimationDivhp1">
                Initial supply of 200 million, <br />
                achieving a higher value with a<br />
                deflationary mechanism through a<br />
                planned buyback and burn system
              </p> */}
              <p id="textAnimationDivhp1">
                {addContent(content.homecommunityPara).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </p>
            </div>
          </div>
          <div className="textTeamSec2" id="textTeamSec2">
            <div className="textTeamSecInner " id="textTeamSecInner2">
              <div className="textAnimationDiv" id="textAnimationDiv2"></div>

              {/* <h3 id="textAnimationDivh32">
                Reward Mechanism
              </h3> */}
              <h3 id="textAnimationDivh32">
                {addContent(content.homesectionUnivers).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </h3>
              {/* <p id="textAnimationDivp2">
                Profit sharing mechanism with the <br/> ecosystem’s growth.  Hold AGOD and <br/> receive  discounts and bonuses and <br/> qualify to share 20% of the generated <br/> revenue fees with holders
              </p> */}
              <p id="textAnimationDivp2">
                {addContent(content.homeuniversPara).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </p>
              <div className="sepratorImageDiv">
                <img
                  className="sepratorImage"
                  src="/img/newassets/separatorLR.png"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="decentralizeApppText">
          {spaceBetween(content.homeheading)[0]} &nbsp;&nbsp;&nbsp;{" "}
          {spaceBetween(content.homeheading)[1]} &nbsp;&nbsp;&nbsp;{" "}
          {spaceBetween(content.homeheading)[2]}
        </p>
      </div>
    </>
  );
};

export default Team;
