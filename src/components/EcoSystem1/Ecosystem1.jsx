/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Particles from "react-tsparticles";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import { conntent } from "../../store/actions/Content";
import engContent from "../../store/actions/content/engContent";
import AgodModal from "../Navbar/GetAgodModal";
import { addContent } from "../../store/Constant";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const EcoSystem1 = ({ sliderRef, blackStar }) => {
  const content = useSelector((e) => e.ContentReducer.content);

  const ref = useRef(null);
  useEffect(() => {
    const el2 = ref.current;
    console.log(el2);
    const el = document.getElementById("container");
    console.log(el);
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data, 'datadata')
    setData([
      {
        h: content.heandig1,
        p: content.heading1Para1,
      },
      {
        h: content.heading0,
        p: content.heading1Para2,
        link: content.heading1Link,
        linkText: content.heading1LinkText,
      },
      {
        h: content.heading2,
        p: content.heading2Para,
        link: content.heading2Link,
        linkText: content.heading2LinkText,
      },
      {
        h: content.headingDreamHub,
        p: content.headingDreamHubPara,
        link: content.headingDreamHubLink,
        linkText: content.headingDreamHubLinkText,
      },
      {
        h: content.heading3,
        p: content.heading3Para,
        // link: content.heading3Link,
        // linkText: content.heading3LinkText,
      },
      {
        h: content.heading4,
        p: content.heading4Para,
        // link: content.heading4Link,
        // linkText: content.heading4LinkText,
      },
    ]);
  }, [content]);


  // useEffect(() => {
  //   var element0 = document.querySelector('#textDivAnim0');
  //   let lock0Sec = false
  //   let lock0SecExit = true
  //   var element1 = document.querySelector('#textDivAnim1');
  //   let lock1Sec = false
  //   let lock1SecExit = true
  //   var element2 = document.querySelector('#textDivAnim2');
  //   let lock2Sec = false
  //   let lock2SecExit = true
  //   var element3 = document.querySelector('#textDivAnim3');
  //   let lock3Sec = false
  //   let lock3SecExit = true
  //   var element4 = document.querySelector('#textDivAnim4');
  //   let lock4Sec = false
  //   let lock4SecExit = true
  //   var element5 = document.querySelector('#textDivAnim5');
  //   let lock5Sec = false
  //   let lock5SecExit = true
  //   window.addEventListener('scroll', function () {
  //     if (element0 ||
  //       element1 ||
  //       element2 ||
  //       element3 ||
  //       element4 ||
  //       element5) {
  //       var position0 = element0.getBoundingClientRect();
  //       var position1 = element1.getBoundingClientRect();
  //       var position2 = element2.getBoundingClientRect();
  //       var position3 = element3.getBoundingClientRect();
  //       var position4 = element4.getBoundingClientRect();
  //       var position5 = element5.getBoundingClientRect();

  //       if (!(position0.top < window.innerHeight && position0.bottom >= 0)) {
  //         if (!lock0SecExit) {
  //           console.log('Element0 exit');
  //           lock0SecExit = true
  //           lock0Sec = false
  //         }
  //       }
  //       // checking for partial visibility
  //       if (position0.top < window.innerHeight && position0.bottom >= 0) {
  //         if (!lock0Sec) {
  //           console.log('Element0 is partially visible in screen');
  //           // element0.scrollIntoView()
  //           let scrollValue = element0.offsetTop
  //           this.window.scrollTo({
  //             top: scrollValue,
  //             behavior: 'smooth',
  //           })
  //           lock0Sec = true
  //           lock0SecExit = false
  //         }
  //       }

  //       if (!(position1.top < window.innerHeight && position1.bottom >= 0)) {
  //         if (!lock1SecExit) {
  //           console.log('Element1 exit');
  //           lock1SecExit = true
  //           lock1Sec = false
  //         }
  //       }
  //       // checking for partial visibility
  //       if (position1.top < window.innerHeight && position1.bottom >= 1) {
  //         if (!lock1Sec) {
  //           console.log('Element1 is partially visible in screen');
  //           // element1.scrollIntoView()
  //           let scrollValue = element1.offsetTop
  //           this.window.scrollTo({
  //             top: scrollValue,
  //             behavior: 'smooth',
  //           })
  //           lock1Sec = true
  //           lock1SecExit = false
  //         }
  //       }
        
  //       if (!(position2.top < window.innerHeight && position2.bottom >= 0)) {
  //         if (!lock2SecExit) {
  //           console.log('Element2 exit');
  //           lock2SecExit = true
  //           lock2Sec = false
  //         }
  //       }
  //       // checking for partial visibility
  //       if (position2.top < window.innerHeight && position2.bottom >= 2) {
  //         if (!lock2Sec) {
  //           console.log('Element2 is partially visible in screen');
  //           // element2.scrollIntoView()
  //           let scrollValue = element2.offsetTop
  //           this.window.scrollTo({
  //             top: scrollValue,
  //             behavior: 'smooth',
  //           })
  //           lock2Sec = true
  //           lock2SecExit = false
  //         }
  //       }

  //       if (!(position3.top < window.innerHeight && position3.bottom >= 0)) {
  //         if (!lock3SecExit) {
  //           console.log('Element3 exit');
  //           lock3SecExit = true
  //           lock3Sec = false
  //         }
  //       }
  //       // checking for partial visibility
  //       if (position3.top < window.innerHeight && position3.bottom >= 3) {
  //         if (!lock3Sec) {
  //           console.log('Element3 is partially visible in screen');
  //           // element3.scrollIntoView()
  //           let scrollValue = element3.offsetTop
  //           this.window.scrollTo({
  //             top: scrollValue,
  //             behavior: 'smooth',
  //           })
  //           lock3Sec = true
  //           lock3SecExit = false
  //         }
  //       }

        
  //       if (!(position4.top < window.innerHeight && position4.bottom >= 0)) {
  //         if (!lock4SecExit) {
  //           console.log('Element4 exit');
  //           lock4SecExit = true
  //           lock4Sec = false
  //         }
  //       }
  //       // checking for partial visibility
  //       if (position4.top < window.innerHeight && position4.bottom >= 4) {
  //         if (!lock4Sec) {
  //           console.log('Element4 is partially visible in screen');
  //           // element4.scrollIntoView()
  //           let scrollValue = element4.offsetTop
  //           this.window.scrollTo({
  //             top: scrollValue,
  //             behavior: 'smooth',
  //           })
  //           lock4Sec = true
  //           lock4SecExit = false
  //         }
  //       }

        
  //       if (!(position5.top < window.innerHeight && position5.bottom >= 0)) {
  //         if (!lock5SecExit) {
  //           console.log('Element5 exit');
  //           lock5SecExit = true
  //           lock5Sec = false
  //         }
  //       }
  //       // checking for partial visibility
  //       if (position5.top < window.innerHeight && position5.bottom >= 5) {
  //         if (!lock5Sec) {
  //           console.log('Element5 is partially visible in screen');
  //           // element5.scrollIntoView()
  //           let scrollValue = element5.offsetTop
  //           this.window.scrollTo({
  //             top: scrollValue,
  //             behavior: 'smooth',
  //           })
  //           lock5Sec = true
  //           lock5SecExit = false
  //         }
  //       }


  //     }

  //   });
  // }, [data])



  return (
    <>
      <div className="ecosystemPage">
        <div className="innerEcosystemPage bockImageNone">
          <div className="ecosystemPageS1">
            <h1
              className="ecosystemPageHeading wow fadeIn responsiveAgodTextnone"
              data-wow-offset="100"
            >
              {content.line1} <br />
              {content.line2}
            </h1>
            <h1
              className="responsiveHeading responsiveHeadingshow"
              data-wow-offset="100"
            >
              {content.line1} <br />
              {content.line2}
            </h1>
            <div className="scrollImg ResponsiveImg">
              <img src="/img/newassets/scroll.png"></img>
            </div>
            <div className="responsiveBox responsiveBoxshow" data-wow-offset="100">
              <div className="montaincircle">
                {/* <img className="shadow" src="/demo-img/shadow.png"></img> */}
                <img className="Img" src="/demo-img/montaincircle.png"></img>
              </div>
              {/* Welcome to the ecosystem; Agod is a simple yet powerful universe of interconnected platforms<br />
              combined with a great minded team behind it. Resulting in a fast, reliable dynamic environment for<br />
              users and investors to obtain great benefits from it. Utilizing blockchain technology, all transactions<br />
              are secured in smart contracts allowing users to engage with centralized and decentralized<br />
              platforms in various ways, gaining the trust of millions of users worldwide.<br />
              Our ecosystem is an interconnected network of platforms linked by one core token, AGOD. Built to <br />
              power the    ecosystem. Users are able to interact and earn rewards among all platforms within. */}
              <p className="wow fadeIn" data-wow-offset="100">
                {addContent(content.line3Res).map((a) => {
                  return (
                    <>
                      {a}
                      <br />
                    </>
                  );
                })}
              </p>
            </div>
            <div className="responsiveAgodTextnoneDiv">

            <p
              className="wow fadeIn responsiveAgodTextnone"
              data-wow-offset="100"
            >
              {/* Welcome to the ecosystem; Agod is a simple yet powerful universe of interconnected platforms<br />
              combined with a great minded team behind it. Resulting in a fast, reliable dynamic environment for<br />
              users and investors to obtain great benefits from it. Utilizing blockchain technology, all transactions<br />
              are secured in smart contracts allowing users to engage with centralized and decentralized<br />
              platforms in various ways, gaining the trust of millions of users worldwide.<br />
              Our ecosystem is an interconnected network of platforms linked by one core token, AGOD. Built to <br />
              power the    ecosystem. Users are able to interact and earn rewards among all platforms within. */}
              {addContent(content.line3).map((a) => {
                return (
                  <>
                    {a}
                    <br />
                  </>
                );
              })}
            </p>
            </div>
          </div>
          <div className="agodTexts responsiveAgodText">
            <div className="gap"></div>
            <div className="textDivEcoDiv wow fadeIn">

              {data.length && data.map((a, i) => {
                return (

                  <div className="textDivAnim" id={'textDivAnim' + i}>
                    <div className="textDivEco">
                      <p style={{ marginBottom: "20px" }}>{a.h}</p>
                      <p>
                        {addContent(a.p).map((a) => (
                          <>
                            {a}
                            <br />
                          </>
                        ))}
                        {a.link ? (
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              window.open(a.link, "_blank");
                            }}
                          >
                            {a.linkText}
                          </span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                )

              })}
              {/* <Slider
                className="Slider1"
                // style={{ width: "100%", height: "100%" }}
                // verticalSwiping={true}
                // slidesToShow={1}
                // focusOnSelect={true}
                // // easing={"fade"}
                dots={true}
                // draggable={true}
                // // dotsClass="slick-dots"
                // // autoplay={true}
                // autoplaySpeed={5000}
                // vertical={true}
                adaptiveHeight={true}
                // cssEase="linear"
                vertical={true}
                verticalSwiping={true}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {data.map((a, i) => {
                  console.log(a);
                  return (
                    <div
                      className="textDivEco"
                    // data-wow-offset="100"
                    >
                      <p style={{ marginBottom: "20px" }}>{a.h}</p>
                      <p>
                        {addContent(a.p).map((a) => (
                          <>
                            {a}
                            <br />
                          </>
                        ))}
                        {a.link ? (
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              window.open(a.link, "_blank");
                            }}
                          >
                            {a.linkText}
                          </span>
                        ) : null}
                      </p>
                    </div>
                  );
                })}
              </Slider> */}
              {/* <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={600}
                totalSlides={6}
                orientation="vertical"
                lockOnWindowScroll
                
              >
                <Slider moveThreshold={0.0001}>
                  {data.map((a, i) => {
                    return (
                      <Slide index={i} className="textDivEcoSlide">
                        <div
                          className="textDivEco"
                        >
                          <p style={{ marginBottom: "20px" }}>{a.h}</p>
                          <p>
                            {addContent(a.p).map((a) => (
                              <>
                                {a}
                                <br />
                              </>
                            ))}
                            {a.link ? (
                              <span
                                className="cursor-pointer"
                                onClick={() => {
                                  window.open(a.link, "_blank");
                                }}
                              >
                                {a.linkText}
                              </span>
                            ) : null}
                          </p>
                        </div>
                      </Slide>
                    )
                  })}
                </Slider>
          </CarouselProvider> */}
              {/* <div class="section" id="fullpage">
                <div class="slide"> Slide 1 </div>
                <div class="slide"> Slide 2 </div>
                <div class="slide"> Slide 3 </div>
                <div class="slide"> Slide 4 </div>
              </div> */}
            </div>
          </div>
          <div className="agodTexts responsiveAgodTextnone">
            <div className="gap"></div>
            <div className="textDivEcoDiv">
              {data.map((a, i) => (
                <div
                  className="textDivEco wow fadeIn"
                  data-wow-offset="100"
                  key={i}
                  style={
                    i + 1 === 2 || i + 1 === data.length - 1
                      ? { marginLeft: "20px" }
                      : i + 1 === 3 || i + 1 === data.length - 2
                        ? { marginLeft: "40px" }
                        : i + 1 === 4 || i + 1 === data.length - 3
                          ? { marginLeft: "60px" }
                          : null
                  }
                >
                  <p><b style={{fontSize:"22px"}}>{a.h}</b></p>
                  <p>
                    {addContent(a.p).map((a) => (
                      <>
                        {a}
                        <br />
                      </>
                    ))}
                    {a.link ? (
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          window.open(a.link, "_blank");
                        }}
                      >
                        {a.linkText}
                      </span>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="getAgodText">
            <p>
              Agod, born as an ecosystem for the community and accessible to everyone, looks to encourage users to explore the crypto universe and<br/>expand their investment horizons and help them find other ways to obtain greater benefits in this evolving world.
            </p>
            <p>
              Join us and explore the expanding ecosystem of AGOD, where limitless investment possibilities are there for the taking.
            </p>
            <p>
              Get AGOD now
            </p>
          </div> */}
        </div>
      </div >
    </>
  );
};

export default EcoSystem1;
