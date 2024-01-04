import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services4 = () => {
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
              TAKE A LOOK AT OUR DOCUMENTS
              </h6>
              <h3 className="wow color-font">Read Our Documents</h3>
              <h3 className="item wow fadeIn">
                <p>
                Here is our full documents that will help you to understand about us. 
                Any other requirement feel free to reach for us at:
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-lg-4 mb-1 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <h5>Whitepaper</h5>
              <span className="icon">
              <img className="imgtayson" src="/img/whitepaper.svg"></img>
              </span>
              <br />
              <Link href="https://agodecosystem.medium.com agod-protocol-white-papers-35fd12738b4d">
                <a className="chido">
                  <span>English</span>
                </a>
              </Link>
              <span> -|- </span>
              <Link href="https://agodecosystem.medium.com transparencia-agod-protocol-9742ff8c075c">
                <a>
                  <span>Español</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <h5>Angel Investors</h5>
              <span className="icon">
                <img className="imgtayson" src="/img/investors.svg"></img>
              </span>
              <br />
              <Link href="https://agod.mx/wp-content/uploads/2021/07/AngelInvestors.pdf">
                <a className="chido">
                  <span>English</span>
                </a>
              </Link>
              <span> -|- </span>
              <Link href="https://agod.mx/wp-content/uploads/2021/07/AngelesInversionistas.pdf">
                <a>
                  <span>Español</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <h5>Terms Sheet</h5>
              <span className="icon">
              <img className="imgtayson" src="/img/terminos.svg"></img>
              </span>
              <br />
              <Link href="https://agod.mx/wp-content/uploads/2021/07/TermSheet.pdf">
                <a className="chido">
                  <span>English</span>
                </a>
              </Link>
              <span> -|- </span>
              <Link href="https://agod.mx/wp-content/uploads/2021/07/Terminos-Generales.pdf">
                <a>
                  <span>Español</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services4;