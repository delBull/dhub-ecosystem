/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import AboutUs3date from "../../data/sections/about-us3.json";
import { thumparallax, thumparallaxDown } from "../../common/thumparallax";

const AboutUs3 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallax();
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="agency section-padding position-re">
      <div className="container">
        <div className="row">
        <div className="col-lg-6">
            <div className="agencyimg">
              <img
                src="/img/eco.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="content">
              <Split>
                <h4 className="wow words chars splitting" data-splitting>
                  {AboutUs3date.title.first} <br /> {AboutUs3date.title.second}
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  {AboutUs3date.content.first} <br />
                  {AboutUs3date.content.second}
                </p>
              </Split>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default AboutUs3;
