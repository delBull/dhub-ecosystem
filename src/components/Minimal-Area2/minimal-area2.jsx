/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  const [ShowMore, setShowMore] = useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  let styleShowMOre = {
    cursor: "pointer",
    position: "absolute",
    top: ShowMore ? "84%" : "0%",
    transition: "0.4s",
  };
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img src="/img/min-area.svg" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Build on Fantom</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We are building on Fantom. An advanced DAG-based aBFT
                  consensus algorithm. Blockchains built on Fantom are fast,
                  secure, and highly scalable:
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  Fully compatible with the Ethereum Virtual Machine (EVM).
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Web3JS API and RPC support.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Smart contracts written in Solidity or Vyper.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Compiled and deployed on Ethereum, are fully compatible with
                  the Opera Network.
                </li>
              </ul>
              <br />
              <Split>
                <div style={{ position: "relative", paddingBottom: "25px" }}>
                  <p
                    className="wow txt words chars splitting thumparallax"
                    data-splitting
                    style={{
                      opacity: ShowMore ? 1 : 0,
                      transition: "0.6s",
                    }}
                  >
                    AGOD Ecosystem hopes to build the infrastructure for a more
                    connected and efficient future where people will be able to
                    take advantage of the technological breakthroughs to improve
                    the quality of their lives.{" "}
                  </p>
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
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
