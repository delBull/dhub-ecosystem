import React from "react";
import appData from "../../data/app.json";
import { addContent, myLoader, spaceBetween } from "../../store/Constant";
import { useSelector } from "react-redux";
import Image from "next/image";
import Split from "../Split";

function IntroductionNew({ lr, nr, theme, blackStar }) {
  const content = useSelector((e) => e.ContentReducer.content);
  return (
    <>
      <div className="introPage hideMob">
        <div className="introPageInner">
          <section className="textReverse FirstSection">
            <div className="firstPlanet">
              <h2 className="planetHeading wow fadeIn" data-wow-offset="100">
                {addContent(content.learnheading1).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </h2>
              <div
                className="planetTextDiv wow fadeIn hidePc"
                data-wow-offset="100"
              >
                <p className="planetText">
                  {addContent(content.learnheading1Para).map((a, i) => (
                    <>
                      {a}
                      {/* <br /> */}
                    </>
                  ))}
                </p>
              </div>
              <div className="plannetDetail">
                <div
                  className="planetTextDiv wow fadeIn hideMob"
                  data-wow-offset="100"
                >
                  <p className="planetText">
                    {addContent(content.learnheading1Para).map((a, i) => (
                      <>
                        {a}
                        {/* <br /> */}
                      </>
                    ))}
                  </p>
                </div>
                <div className="planetPicDiv planetPicDiv2  smallPlanetPicDiv">
                  <Image
                    loader={myLoader}
                    src={appData.introFirstPlanet}
                    alt="Picture of the author"
                    height={100}
                    width={100}
                  />
                  {/* <img src={appData.introFirstPlanet} /> */}
                </div>
              </div>
            </div>
            <div className="secondPlanet">
              <h2 className="planetHeading wow fadeIn" data-wow-offset="100">
                {addContent(content.learnheading2).map((a, i) => (
                  <>
                    {a}
                    {/* <br /> */}
                  </>
                ))}
              </h2>
              <div className="plannetDetail">
                <div className="planetTextDiv wow fadeIn" data-wow-offset="100">
                  <p className="planetText">
                    {addContent(content.learnheading2Para).map((a, i) => (
                      <>
                        {a}
                        {/* <br /> */}
                      </>
                    ))}
                  </p>
                </div>
                <div className="planetPicDiv largePlanetPicDiv">
                  <Image
                    loader={myLoader}
                    src={appData.introSecondPlanet}
                    alt="Picture of the author"
                    height={100}
                    width={100}
                  />
                  {/* <img src={appData.introSecondPlanet} /> */}
                </div>
              </div>
            </div>
          </section>

          <section className="AGODTokenSection">
            <div className="TextDivToken">
              <div className="blankTokenDiv"></div>
              <div
                className="wow fadeIn"
                data-wow-offset="100"
                data-wow-delay="300"
              >
                <p className="planetText">
                  {addContent(content.learnpara3).map((a, i) => (
                    <>
                      {a}
                      <br />
                    </>
                  ))}
                </p>
              </div>
            </div>
            <div>
              <h1 className="agodTokenHeading">
                {spaceBetween(content.learnheading3).map((a, i) => (
                  <span
                    className="wow flipInX"
                    data-wow-offset="100"
                    data-wow-delay={`${5 + i}00ms`}
                    style={i === 1 ? {padding: "0px 70px"} : {padding:'0px'}}
                  >
                    {" "}
                    {a}{" "}
                  </span>
                ))}
                {/* <span className='wow flipInX' data-wow-offset="100" data-wow-delay="700ms"> AGOD </span> <span className='wow flipInX' data-wow-offset="100" data-wow-delay="900ms">TOKEN</span> */}
              </h1>
            </div>
            <div className="TextDivToken secondTextDivToken ">
              <div
                className="wow fadeIn "
                data-wow-offset="100"
                data-wow-delay="300"
              >
                <p className="planetText">
                  {addContent(content.learnheading3Para).map((a, i) => (
                    <>{a}</>
                  ))}
                </p>
              </div>
              <div className="blankTokenDiv"></div>
            </div>
          </section>

          <section className="SecSection">
            <div className="firstPlanet">
              <h2 className="planetHeading wow fadeIn" data-wow-offset="100">
                {addContent(content.learnheading4).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </h2>
              <div className="plannetDetail">
                <div className="planetPicDiv largePlanetPicDiv">
                  <Image
                    loader={myLoader}
                    src={appData.introfourthPlanet}
                    alt="Picture of the author"
                    height={100}
                    width={100}
                  />
                  {/* <img src={appData.introfourthPlanet} /> */}
                </div>
                <div className="planetTextDiv wow fadeIn" data-wow-offset="100">
                  <p className="planetText">
                    {addContent(content.learnpara4).map((a, i) => (
                      <>
                        {a}
                        {/* <br /> */}
                      </>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="secondPlanet">
              <h2 className="planetHeading wow fadeIn" data-wow-offset="100">
                {addContent(content.learnheading5).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </h2>
              <div className="plannetDetail">
                <div className="planetPicDiv smallPlanetPicDiv">
                  <Image
                    loader={myLoader}
                    src={appData.introfifthPlanet}
                    alt="Picture of the author"
                    height={100}
                    width={100}
                  />
                  {/* <img src={appData.introfifthPlanet} /> */}
                </div>
                <div className="planetTextDiv wow fadeIn" data-wow-offset="100">
                  <p className="planetText">
                    {addContent(content.learnheading4Para).map((a, i) => (
                      <span
                        className="wow flipInX"
                        data-wow-offset="100"
                        data-wow-delay={`${5 + i}00ms`}
                      >
                        {" "}
                        {a}{" "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* <section className='explore'>
                        <div className='exploreLogo'>
                            <Image
                                loader={myLoader}
                                src={appData.footerlogo}
                                alt="Picture of the author"
                                height={100}
                                width={100}
                            />
                        </div>
                        <div className='exploreDiv'>
                            <div className='innerExploreDiv'>
                                <h2>{addContent(content.learnheading6).map((a, i) => (
                                    <>
                                        {a}
                                        <br />
                                    </>
                                ))}</h2>
                                <h4>{addContent(content.learnpara6).map((a, i) => (
                                    <>
                                        {a}
                                        <br />
                                    </>
                                ))}</h4>
                                <p>{addContent(content.learnpara6P).map((a, i) => (
                                    <>
                                        {a}
                                        <br />
                                    </>
                                ))}<a>features</a></p>

                                <h4>{addContent(content.learnheading7).map((a, i) => (
                                    <>
                                        {a}
                                        <br />
                                    </>
                                ))}</h4>
                                <p>{addContent(content.learnpara7).map((a, i) => (
                                    <>
                                        {a}
                                        <br />
                                    </>
                                ))}<br />
                                    <a>{addContent(content.learnpara7Link).map((a, i) => (
                                        <>
                                            {a}
                                            <br />
                                        </>
                                    ))}</a></p>

                                <h4>{addContent(content.learnheading9).map((a, i) => (
                                    <>
                                        {a}
                                        <br />
                                    </>
                                ))}</h4>
                                <p>{addContent(content.learnpara9).map((a, i) => (
                                    <>
                                        {a}
                                        <br />
                                    </>
                                ))}</p>
                            </div>
                        </div>
                    </section> */}
          </section>
        </div>
      </div>
      <div className="introPage hidePc">
        <div className="introPageInner">
          <div className="scrollImage">
            <img className="scrollIntro" src="/img/newassets/scroll.png" />
          </div>
          <section className="textReverse FirstSection">
            <div className="firstBoxPlanet">
              <div className="imageParent">
                {/* <Image
                                        loader={myLoader}
                                        src={appData.introFirstPlanet}
                                        alt="Picture of the author"
                                        height={100}
                                        width={100}
                                    /> */}
                <img src="/img/newIntroAssets/first.png" />
              </div>
              <div className="firstBoxInnerPlanet">
                {/* <Image
                                    loader={myLoader}
                                    src={appData.introSecondPlanet}
                                    alt="Picture of the author"
                                    height={100}
                                    width={100}
                                    className="imageSeperator"
                                /> */}
                <h2 className="planetHeading wow fadeIn" data-wow-offset="100">
                  {addContent(content.learnheading1).map((a, i) => (
                    <>
                      {a}
                      <br />
                    </>
                  ))}
                </h2>
              </div>
              <div className="firstBoxInnerPlanet2">
                {/* <Split> */}
                {/* wow txt words */}
                <p className="planetText wow fadeIn">
                  {addContent(content.learnheading1Para).map((a, i) => (
                    <>
                      {a}
                      {/* <br /> */}
                    </>
                  ))}
                </p>
                {/* </Split> */}
              </div>
            </div>
            <div className="secondBoxPlanet">
              <div className="imageParent">
                {/* <Image
                                        loader={myLoader}
                                        src={appData.introSecondPlanet}
                                        alt="Picture of the author"
                                        height={100}
                                        width={100}
                                    /> */}
                <img src="/img/newIntroAssets/one.png" />
              </div>
              <div className="firstBoxInnerPlanet">
                <h2 className="planetHeading wow fadeIn" data-wow-offset="100">
                  {addContent(content.learnheading2).map((a, i) => (
                    <>
                      {a}
                      <br />
                    </>
                  ))}
                </h2>
              </div>
              <div className="firstBoxInnerPlanet2">
                <p className="planetText wow fadeIn">
                  {addContent(content.learnheading2Para).map((a, i) => (
                    <>
                      {a}
                      {/* <br /> */}
                    </>
                  ))}
                </p>
              </div>
            </div>
          </section>

          <section className="AGODTokenSection">
            <div className="TextDivToken">
              <div className="imageSepParent2">
                <img
                  className="sepratorImage sepratorImageInver "
                  src="/img/newassets/separatorLR.png"
                />
              </div>

              <div className="blankTokenDiv"></div>
              <div
                className="wow fadeIn"
                data-wow-offset="100"
                data-wow-delay="300"
                data-aos="fade-right"
              >
                <p className="planetText">
                  {addContent(content.learnpara3).map((a, i) => (
                    <>
                      {a}
                      {/* <br /> */}
                    </>
                  ))}
                </p>
              </div>
            </div>
            <div>
              <h1 className="agodTokenHeading">
                {addContent(content.learnheading1).map((a, i) => (
                  <span
                    className="wow flipInX"
                    data-wow-offset="100"
                    data-wow-delay={`${5 + i}00ms`}
                  >
                    {" "}
                    {a}{" "}
                  </span>
                ))}
                {/* <span className='wow flipInX' data-wow-offset="100" data-wow-delay="700ms"> AGOD </span> <span className='wow flipInX' data-wow-offset="100" data-wow-delay="900ms">TOKEN</span> */}
              </h1>
            </div>
            <div className="TextDivToken secondTextDivToken">
              <div
                className="wow fadeIn tokenContentLeft"
                data-wow-offset="100"
                data-wow-delay="300"
                data-aos="fade-left"
              >
                <p className="planetText  planetTextLeft ">
                  {addContent(content.learnheading3Para).map((a, i) => (
                    <>
                      {a}
                      {/* <br /> */}
                    </>
                  ))}
                </p>
              </div>
              {/* <div className="blankTokenDiv">

                            </div> */}
              <div className="imageSepParent">
                <img
                  className="sepratorImage sepratorImageInver "
                  src="/img/newassets/separatorLR.png"
                />
              </div>
            </div>
          </section>

          <section className="SecSection">
            <div className="thirdBoxPlanet">
              <div className="imageParent2">
                {/* <Image
                                        loader={myLoader}
                                        src={appData.introfifthPlanet}
                                        alt="Picture of the author"
                                        height={100}
                                        width={100}
                                    /> */}
                <img src="/img/newIntroAssets/three.png" />
              </div>
              <div className="thirdBoxInnerPlanet">
                <h2 className="planetHeading wow fadeIn" data-wow-offset="100">
                  {addContent(content.learnheading4).map((a, i) => (
                    <>
                      {a}
                      <br />
                    </>
                  ))}
                </h2>
              </div>
              <div className="thirdBoxInnerPlanet2">
                <p className="planetText wow fadeIn">
                  {addContent(content.learnpara4).map((a, i) => (
                    <>
                      {a}
                      {/* <br /> */}
                    </>
                  ))}
                </p>
              </div>
            </div>
          </section>
          <section className="SecSection">
            <div className="fourBoxPlanet">
              <div className="fourBoxInnerPlanet">
                <h2 className="planetHeading wow fadeIn" data-wow-offset="100">
                  {addContent(content.learnheading2).map((a, i) => (
                    <>
                      {a}
                      <br />
                    </>
                  ))}
                </h2>
              </div>
              <div className="fourBoxInnerPlanet2">
                <div className="imageParent2">
                  {/* <Image
                                    loader={myLoader}
                                    src={appData.introfourthPlanet}
                                    alt="Picture of the author"
                                    height={100}
                                    width={100}
                                /> */}
                  <img src="/img/newIntroAssets/four.png" />
                </div>
                <p className="planetText wow fadeIn">
                  {addContent(content.learnheading2Para).map((a, i) => (
                    <>
                      {a}
                      {/* <br /> */}
                    </>
                  ))}
                </p>
              </div>
            </div>
            <div className="scrollIntoContainer">
              <img className="scrollIntro" src="/img/newassets/scroll.png" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

//

//

//

// About Us

//

//

// Resources

//

export default IntroductionNew;
