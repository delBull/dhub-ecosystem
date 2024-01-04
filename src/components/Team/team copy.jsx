/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/team.json";

const Team = () => {
  const [ShowMore, setShowMore] = useState(false);
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
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>OUR WORLD OUR ECOSYSTEM</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit mb-15">COMMUNITY DRIVEN.</h3>
              <p>
                Fair launches coming soon. All AGOD tokens will be community
                based. Giving you special access to investments within our
                multilinked platforms.
              </p>
              <div style={{ position: "relative", paddingBottom: "25px" }}>
                <div
                  className="skills-box mt-40"
                  style={{
                    opacity: ShowMore ? 1 : 0,
                    transition: "0.6s",
                  }}
                >
                  {teamsDate.skills.map((skill) => (
                    <div className="skill-item" key={skill.id}>
                      <h6 className="custom-font">{skill.text}</h6>
                      {/* <div className="skill-progress">
                      <div className="progres" data-value={skill.value}></div>
                    </div> */}
                      <p style={{ fontSize: "14px" }}>{skill.Paragraph}</p>
                    </div>
                  ))}
                </div>

                {ShowMore ? (
                  <p
                    className="wow txt words chars splitting"
                    style={styleShowMOre}
                    onClick={() => setShowMore(!ShowMore)}
                    data-splitting
                  >
                    Show Less...
                  </p>
                ) : (
                  <p
                    className="wow txt words chars splitting"
                    style={styleShowMOre}
                    onClick={() => setShowMore(!ShowMore)}
                    data-splitting
                  >
                    Show More...
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/img/nucleo.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
