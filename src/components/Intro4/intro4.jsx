import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { addContent, myLoader } from "../../store/Constant";
import { useSelector } from "react-redux";

const Intro4 = ({ sliderRef, blackStar }) => {
  const content = useSelector(e => e.ContentReducer.content)
  const ref = useRef(null);

  useEffect(() => {

    const el = document.getElementById("container");
  }, []);
  return (
    <header
      ref={sliderRef}
      style={{ display: "flex", alignItems: "flex-start" }}
      className="circle-bg valign introSection section"
    >
      <img className="planetImage showPlanet" id="planetImage" src="/img/newIntroAssets/INTRO3HD.png" />
      <div
        ref={ref}
        id="container"
        style={{ marginTop: "7%" }}
        className="container"
      >
        <div className="row justify-content-center headingMain showHeadMain" id="headingMain">
          <div className="col-lg-10">
            <div className="cont text-center">
              <span>{addContent(content.homesection2HeadingWelcome).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}</span>
              <h1 className="introHeading" >
                {/* AGOD ECOSYSTEM */}
                {addContent(content.homesection2Heading).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </h1>
              <img className="agodecosystemline" src="/img/newassets/agodecosystemline.png" />
              <h4  className="homesection2SlogHeading">
              {addContent(content.homesection2SlogHeading).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </h4>
              <img className="scrollIntro" src="/img/newassets/scroll.png" />
              {/* <h4 className="homesection2SlogHeading">
                {addContent(content.homesection2SlogHeading).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
                </h4> */}
            </div>
            <br />

          </div>
        </div>
      </div>




    </header>

  );
};

export default Intro4;
