/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import appData from "../../data/app.json";
import { addContent, myLoader } from "../../store/Constant";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Image from "next/image";

const AboutUs3 = ({
  textAboutSec0Active,
  textAboutSec1Active,
  textAboutSec2Active,
  textAboutSec3Active,
  textAboutSec4Active

}) => {
  const content = useSelector(e => e.ContentReducer.content)
  const [data, setData] = useState([])
  const [rerender, setRerender] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

  useEffect(() => {
    console.log(content)
    setRerender(!rerender)
    setData([])

  }, [content])

  useEffect(() => {
    console.log(rerender, 'rerender')
    if (!data.length) {

      setData([
        {
          h3: content.homeecosystemHeading1,
          p: content.homeecosystemHeading1text,
          link: content.homeecosystemHeading1Link
        },
        {
          h3: content.homeecosystemHeading2,
          p: content.homeecosystemHeading2text,
          link: content.homeecosystemHeading2Link
        },
        {
          h3: content.homeecosystemHeading3,
          p: content.homeecosystemHeading3text
        },
        {
          h3: content.homeecosystemHeading4,
          p: content.homeecosystemHeading4text
        },
        {
          h3: content.homeecosystemHeading5,
          p: content.homeecosystemHeading5text

        },

      ])
    }
  }, [rerender])



  const handleMouseMove = (e) => {
    const el = document.getElementById("wrapper");
    const d = el.getBoundingClientRect();
    let x = e.clientX - (d.left + Math.floor(d.width / 2));
    let y = e.clientY - (d.top + Math.floor(d.height / 2));
    // Invert values
    x = x - x * 2;
    y = y - y * 2;
    document.documentElement.style.setProperty("--scale", 1);
    document.documentElement.style.setProperty("--x", x / 10 + "px");

    document.documentElement.style.setProperty("--y", y / 10 + "px");
  };

  const handleMouseLeave = () => {
    // document.documentElement.style.setProperty("--scale", 1);
    // document.documentElement.style.setProperty("--x", 0);
    // document.documentElement.style.setProperty("--y", 0);
  };

  const [contentDataHeading, setContentDataHeading] = useState([])
  const [contentDataPara, setContentDataPara] = useState([])
  const [contentDataLink, setContentDataLink] = useState([])
  const [contentDataLinkUrl, setContentDataLinkUrl] = useState([])
  const [contentDataLogo, setContentDataLogo] = useState('')

  useEffect(() => {
    setContentDataHeading(addContent(content.homeecosystemHeading1))
    setContentDataPara(addContent(content.homeecosystemHeading1text))
    setContentDataLink(addContent(content.homeecosystemHeading1Link))
    setContentDataLinkUrl(addContent(content.homeecosystemHeading1LinkUrl))
  }, [content])

  useEffect(() => {
    if (activeTab === 1) {
      setContentDataHeading(addContent(content.homeecosystemHeading1))
      setContentDataPara(addContent(content.homeecosystemHeading1text))
      setContentDataLink(addContent(content.homeecosystemHeading1Link))
      setContentDataLinkUrl(addContent(content.homeecosystemHeading1LinkUrl))
      setContentDataLogo("/img/newassets/logodreamfd.png")
    } else if (activeTab === 2) {
      setContentDataHeading(addContent(content.homeecosystemHeading2))
      setContentDataPara(addContent(content.homeecosystemHeading2text))
      setContentDataLink(addContent(content.homeecosystemHeading2Link))
      setContentDataLinkUrl(addContent(content.homeecosystemHeading2LinkUrl))
      setContentDataLogo("/img/newassets/pandorasLogo.png")
    } else if (activeTab === 3) {
      setContentDataHeading(addContent(content.homeecosystemHeading3))
      setContentDataPara(addContent(content.homeecosystemHeading3text))
      setContentDataLink(addContent(content.homeecosystemHeading3ink))
      setContentDataLinkUrl(addContent(content.homeecosystemHeading3LinkUrl))
      setContentDataLogo("/img/newassets/ablocLogo.png")
    } else if (activeTab === 4) {
      setContentDataHeading(addContent(content.homeecosystemHeading4))
      setContentDataPara(addContent(content.homeecosystemHeading4text))
      setContentDataLink(addContent(content.homeecosystemHeading4ink))
      setContentDataLinkUrl(addContent(content.homeecosystemHeading4LinkUrl))
      setContentDataLogo("")
    } else if (activeTab === 5) {
      setContentDataHeading(addContent(content.homeecosystemHeading5))
      setContentDataPara(addContent(content.homeecosystemHeading5text))
      setContentDataLink(addContent(content.homeecosystemHeading5ink))
      setContentDataLinkUrl(addContent(content.homeecosystemHeading5LinkUrl))
      setContentDataLogo("")
    }
  }, [activeTab])


  return (
    <section
      className="aboutUseSection section">
      <div className="innerAboutUsSection">
        <div className="aboutContainer">
          {/* <div className="COERNERLEFT corner">

            <Image
              loader={myLoader}
              src={appData.COERNERLEFT}
              alt="Picture of the author"
              height={100}
              width={100}
            />
          </div>
          <div className="MEDIUM">

            <Image
              loader={myLoader}
              src={appData.MEDIUM}
              alt="Picture of the author"
              height={100}
              width={100}
            />
          </div>
          <div className="CORNERRIGTH corner">

            <Image
              loader={myLoader}
              src={appData.CORNERRIGTH}
              alt="Picture of the author"
              height={100}
              width={100}
            />
          </div> */}
          <div className="ecosystemHeading">
            <div className="ecosystemHeadingInner">
              <img className="theHeart" src="/img/newassets/theheart.svg" />
              <h3 className="wow fadeIn" data-wow-offset="100">
                {addContent(content.homesectionEcosystem).map((a, i) => (
                  <>
                    {a}

                  </>
                ))}
              </h3>
              <img className="theHeart revert" src="/img/newassets/theheart.svg" />
            </div>
            <div className="loadingSymbol">
              <img src="/img/newassets/degradedframes.png" />
            </div>
          </div>
          <div className="aboutTextDiv hideMobAbout">
            <div id="textAboutSec0" className="textAboutSec1" style={{ marginLeft: '0px' }}>
              <div className={`textAnimationDiv ${textAboutSec0Active ? 'active' : ''}`}>
              </div>
              <h3 className={textAboutSec0Active ? 'active' : ''}>
                <span>
                  {addContent(content.homeecosystemHeading1).map((a, i) => (
                    <>
                      {a}

                    </>
                  ))}</span>

              </h3>
              <p className={textAboutSec0Active ? 'active aboutTextDivParagraph' : 'aboutTextDivParagraph'}>
                {addContent(content.homeecosystemHeading1text).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}{content.homeecosystemHeading1Link ?
                  <span onClick={() => {
                    window.open('https://dreamhub.art/')
                  }}>
                    &nbsp;
                    {addContent(content.homeecosystemHeading1Link)}
                  </span>
                  : null}</p>
            </div>
            <div id="textAboutSec1" className="textAboutSec1" style={{ marginLeft: '80px' }}>
              <div className={`textAnimationDiv ${textAboutSec1Active ? 'active' : ''}`}>
              </div>
              <h3 className={textAboutSec1Active ? 'active' : ''}>
                <span>
                  {addContent(content.homeecosystemHeading2).map((a, i) => (
                    <>
                      {a}

                    </>
                  ))}</span>

              </h3>
              <p className={textAboutSec1Active ? 'active aboutTextDivParagraph' : 'aboutTextDivParagraph'}>
                {addContent(content.homeecosystemHeading2text).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}{content.homeecosystemHeading2Link ?
                  <span onClick={() => {
                    window.open('https://pandoras.finance/')
                  }}>
                    &nbsp;
                    {addContent(content.homeecosystemHeading2Link)}
                  </span>
                  : null}</p>
            </div>
            <div id="textAboutSec2" className="textAboutSec1" style={{ marginLeft: '160px' }}>
              <div className={`textAnimationDiv ${textAboutSec2Active ? 'active' : ''}`}>
              </div>
              <h3 className={textAboutSec2Active ? 'active' : ''}>
                <span>
                  {addContent(content.homeecosystemHeading3).map((a, i) => (
                    <>
                      {a}

                    </>
                  ))}</span>

              </h3>
              <p className={textAboutSec2Active ? 'active aboutTextDivParagraph' : 'aboutTextDivParagraph'}>
                {addContent(content.homeecosystemHeading3text).map((a, i) => (
                  <>
                    {a}

                  </>
                ))}</p>
            </div>
            <div id="textAboutSec3" className="textAboutSec1" style={{ marginLeft: '240px' }}>
              <div className={`textAnimationDiv ${textAboutSec3Active ? 'active' : ''}`}>
              </div>
              <h3 className={textAboutSec3Active ? 'active' : ''}>
                <span>
                  {addContent(content.homeecosystemHeading4).map((a, i) => (
                    <>
                      {a}

                    </>
                  ))}</span>

              </h3>
              <p className={textAboutSec3Active ? 'active aboutTextDivParagraph' : 'aboutTextDivParagraph'}>
                {addContent(content.homeecosystemHeading4text).map((a, i) => (
                  <>
                    {a}

                  </>
                ))}</p>
            </div>
            <div id="textAboutSec4" className="textAboutSec1" style={{ marginLeft: '320px' }}>
              <div className={`textAnimationDiv ${textAboutSec4Active ? 'active' : ''}`}>
              </div>
              <h3 className={textAboutSec4Active ? 'active' : ''}>
                <span>
                  {addContent(content.homeecosystemHeading5).map((a, i) => (
                    <>
                      {a}

                    </>
                  ))}</span>

              </h3>
              <p className={textAboutSec4Active ? 'active aboutTextDivParagraph' : 'aboutTextDivParagraph'}>
                {addContent(content.homeecosystemHeading5text).map((a, i) => (
                  <>
                    {a}

                  </>
                ))}</p></div>


            <div className="galaxy cursor-pointer click-Me" id="wrapper" onMouseMove={handleMouseMove}
              onClick={handleMouseLeave}>
              <Image
                loader={myLoader}
                src={appData.galaxy}
                alt="Picture of the author"
                height={100}
                width={100}
              />
            </div>

            {/* <img className="galaxy cursor-pointer click-Me" src={appData.galaxy} id="wrapper" onMouseMove={handleMouseMove}
              onClick={handleMouseLeave} /> */}

            {/* <div className="textAboutSec1">
              <h3>ABLOC CEX</h3>
              <p>
                The People Exchange. Designed for the communi-<br />
                ty, better returns, lower fees, great interface.
              </p>
            </div>
            <div className="textAboutSec1">
              <h3>ABLOC CEX</h3>
              <p>
                The People Exchange. Designed for the communi-<br />
                ty, better returns, lower fees, great interface.
              </p>
            </div>
            <div className="textAboutSec1">
              <h3>ABLOC CEX</h3>
              <p>
                The People Exchange. Designed for the communi-<br />
                ty, better returns, lower fees, great interface.
              </p>
            </div>
            <div className="textAboutSec1">
              <h3>ABLOC CEX</h3>
              <p>
                The People Exchange. Designed for the communi-<br />
                ty, better returns, lower fees, great interface.
              </p>
            </div> */}
          </div>
          <div className="aboutUspageMobile">
            <div className="innerAboutUspageMobile">
              <div className="tabsEcoSystem">
                <div className="ecoSystemTabHeader">
                  <div className={activeTab === 1 ? "ecoSystemTab active" : 'ecoSystemTab'} onClick={() => setActiveTab(1)}>{content?.homeecosystemHeading1?.split(" ")[0]}</div>
                  <div className={activeTab === 2 ? "ecoSystemTab active" : 'ecoSystemTab'} onClick={() => setActiveTab(2)}>{content?.homeecosystemHeading2?.split(" ")[0]}</div>
                  <div className={activeTab === 3 ? "ecoSystemTab active" : 'ecoSystemTab'} onClick={() => setActiveTab(3)}>{content?.homeecosystemHeading3?.split(" ")[0]}</div>
                  <div className={activeTab === 4 ? "ecoSystemTab active" : 'ecoSystemTab'} onClick={() => setActiveTab(4)}>{content?.homeecosystemHeading4?.split(" ")[0]}</div>
                  <div className={activeTab === 5 ? "ecoSystemTab active" : 'ecoSystemTab'} onClick={() => setActiveTab(5)}>{content?.homeecosystemHeading5?.split(" ")[0]}</div>
                </div>
                <div className="ecoSystemBody" style={activeTab === 2 || activeTab === 4 ? { background: `linear-gradient(180deg, rgba(58, 31, 147, 1) 0%, rgba(19, 19, 19, 1) 83%)` } : { background: `linear-gradient(0deg, rgba(58, 31, 147, 1) 0%, rgba(19, 19, 19, 1) 83%)` }}>
                  <div className="innerEcoSystemBody">
                    {/* <div className="ecoSystemBodyGradeintDiv">
                  <div className="ecoSystemBodyGradeint"></div>
                  <div className="ecoSystemBodyGradeintRev"></div>
                    </div> */}
                    <h4>{contentDataHeading.length && contentDataHeading.map((a, i) => (
                      <>
                        {a}
                        <br />
                      </>
                    ))}</h4>
                    <div className="logodreamfdDiv">
                      <img className="AURA" src="/img/newassets/AURADREAMHUB.png" />
                      <img className="logodreamfd" src={contentDataLogo} />
                    </div>
                    <div className="ecoSystemBodyDiv">
                      <p>{contentDataPara.length && contentDataPara.map((a, i) => (
                        <>
                          {a}
                          <br />
                        </>
                      ))}{contentDataLink.length && contentDataLink.map((a, i) => (
                        <span onClick={() => {
                          window.open(contentDataLinkUrl)
                        }}>
                          {contentDataLink}
                          {/* <br /> */}
                        </span>
                      ))}
                        {/* {content.homeecosystemHeading1Link ?
                          <span onClick={() => {
                            window.open('https://dreamhub.art/')
                          }}>
                            &nbsp;
                            {addContent(content.homeecosystemHeading1Link)}
                          </span>
                          : null} */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>













    </section>
    // <div
    //   id="wrapper"
    //   onMouseMove={handleMouseMove}
    //   onClick={handleMouseLeave}
    // >
    //   <img id="image" />
    // </div>
  );
};

export default AboutUs3;
