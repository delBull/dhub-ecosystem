import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
              START AT THE CORE
              </h6>
              <h3 className="wow color-font">The heart of the ecosystem</h3>
              <h3 className="item wow fadeIn">
                <p>
                Serving as the economic center of AGOD Ecosystem, 
                the Core provides vital services to the apps and services within.
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-lg-4 mb-1 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
              <img className="taysonimg" src="/img/f1.svg"></img>
              </span>
              <h5>Abloc CEX</h5>
              <p>
                The People’s Exchange. Designed for the community, better
                returns, lower fees, great interface.
              </p>
              <Link href="https://www.abloc.io">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <img className="taysonimg" src="/img/f2.svg"></img>
              </span>
              <h5>Adex Exchange</h5>
              <p>
                Multichain enhanced exchange, swapping digital assets
                multichain, with very low fees and instant transaction
                confirmation.
              </p>
              {/*<Link href="/">*/
                <a className="more-stroke">
                <span></span>
              </a>
            /*</Link>*/}
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
              <img className="taysonimg" src="/img/f3.svg"></img>
              </span>
              <h5>Dreamhub</h5>
              <p>
                NFT Marketplace. Set to operate a next-gen decentralized NFT
                marketplace.
              </p>
              {/*<Link href="/">*/
                <a className="more-stroke">
                <span></span>
              </a>
            /*</Link>*/}
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
              <img className="taysonimg" src="/img/f4.svg"></img>
              </span>
              <h5>Pandora’s Finance</h5>
              <p>
                Crypto Startup Enhancer, combining the power of a protocol that
                builds native DAO tooling interfaces.
              </p>
              {/*<Link href="/">*/
                <a className="more-stroke">
                <span></span>
              </a>
            /*</Link>*/}
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
              <img className="taysonimg" src="/img/f5.svg"></img>
              </span>
              <h5>Ra Wallet</h5>
              <p>
                Not just another DeFi wallet. The bridge between the real world
                assets and crypto is now possible, rewards, banking system,
                bring your wallet with you everywhere.
              </p>
              {/*<Link href="/">*/
                <a className="more-stroke">
                <span></span>
              </a>
            /*</Link>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
