/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding
            ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  <h3 className="wow color-font">
                    We love our clients from all over the world.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              {/* <div className="sec-head"> */}
              <h6
                className="color-font"
                style={{
                  fontSize: "50px",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                Stake on Fantom
              </h6>
              {/* </div> */}
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Heading FTM Staking Stake on Fantom
                        </h6>
                        {/* <span className="author-details">
                          Co-founder, Colabrio
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <p>
                    Earn rewards by staking your FTM to help secure the network.
                    Choose your staking preference, start earning with a few
                    clicks, and use your staked funds as collateral on DeFi.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Earn up to 13% APY
                        </h6>
                        {/* <span className="author-details">
                          Co-founder, Colabrio
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <p>
                    Stake-as-you go earns around 4% APY on your capital, up to
                    13% for a one-year commitment to staking.
                    {/* I would highly recommend Vie Digital. I worked with the team
                    on an animation for our ‘Click &amp; Collect’ service. */}
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Choose your rewards:
                        </h6>
                        {/* <span className="author-details">
                          Co-founder, Colabrio
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <p>
                    You can choose how long to lock your delegation for: from no
                    lock to up to a year lock for increased staking rewards
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Unlock liquidity On Fantom:
                        </h6>
                        {/* <span className="author-details">
                          Co-founder, Colabrio
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <p>
                    your delegated FTM gives you sFTM, a synthetic asset you can
                    use within the Fantom DeFi ecosystem.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
