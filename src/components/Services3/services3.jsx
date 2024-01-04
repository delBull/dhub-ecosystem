import React, { useState } from "react";
import appData from "../../data/app.json";
import { useSelector } from "react-redux";
import { addContent, myLoader } from "../../store/Constant";
import Image from "next/image";
import Link from "next/link";
import BottomSheetWallet from "../Navbar/BottomSheetWallet";
import AgodModal from "../Navbar/GetAgodModal";
import SwapModal from "../Navbar/SwapModal";
import CardAddModal from "../Navbar/CardAddModal";

const Services3 = () => {
  const content = useSelector((e) => e.ContentReducer.content);
  const [open, setOpen] = useState(false);

  function onDismiss() {
    setOpen(false);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSwap, setShowSwap] = useState(false);

  const handleCloseSwap = () => {
    setShowSwap(false);
    handleShow();
  };
  const handleShowSwap = () => {
    console.log("ShowSwap");
    setShowSwap(true);
  };

  const [showCard, setShowCard] = useState(false);

  const handleCloseCard = () => {
    setShowCard(false);
    handleShow();
  };
  const handleShowCard = () => {
    console.log("ShowCard");
    setShowCard(true);
  };

  return (
    <section className="serviceSection section">
      <div className="innnerServiceSection">
        <div className="serviceSectionContainer">
          <h3 className="wow fadeIn" data-wow-offset="100">
            {content.homesectionBuilt}
          </h3>
          <div className="fantomDetailDiv">
            <div className="fantomDetail">
              <p className="wow fadeInRight" data-wow-offset="100">
                {content.homesectionBuiltText}
                <br />
                {content.homebuiltP1}
                <br />
                {content.homebuiltP2}
                <br />
                {addContent(content.homebuiltP3).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
                {/* <br /> */}
              </p>
            </div>
        
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
            {/* <img src={appData.COERNERLEFT} className="COERNERLEFT corner" />
            <img src={appData.MEDIUM} className="MEDIUM" />
            <img src={appData.CORNERRIGTH} className="CORNERRIGTH corner" /> */}
          </div>
          <div className="getAgodDiv">
              <p
                className="nav_links Fonts ARROW cursor-pointer "
                style={{ fontSize: "22px" }}
                onClick={() => setOpen(true)}
              >
                {content.navbar3}
              </p>
            </div>
          <div className="socialMediaLinks">
            <a
              target="_blank"
              href={content.facebookLink}
              className="wow fadeIn"
              data-wow-delay="500ms"
            >
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              href={content.twitterLink}
              className="wow fadeIn"
              data-wow-delay="600ms"
            >
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              href={content.instagramLink}
              className="wow fadeIn"
              data-wow-delay="700ms"
            >
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              href={content.telegramLink}
              className="wow fadeIn"
              data-wow-delay="800ms"
            >
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              href={content.linkedInLink}
              className="wow fadeIn"
              data-wow-delay="900ms"
            >
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              href={content.mediumLink}
              className="wow fadeIn"
              data-wow-delay="1100ms"
            >
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"></path>
              </svg>
            </a>

            <a
              target="_blank"
              href={content.tiktokLink}
              className="wow fadeIn"
              data-wow-delay="1100ms"
            >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z">
                </path>
              </svg>

            </a>
          </div>
        </div>
        <div className="footerSection">
          <div className="img">
            {/* <Image
              loader={myLoader}
              src={appData.footerlogo}
              alt="Picture of the author"
              height={100}
              width={100}
            /> */}
            <img src={appData.footerlogo}/>
          </div>
          {/* <img src={appData.footerlogo} /> */}
          <div className="footerCopywrite">
            <p>
              {content.homesectionCopyright} &nbsp; 
              {/* <Link href="https://knockout.media/">
                <span>{content.homesectionCopyrightLink}</span>
              </Link> */}
              
            </p>
            <p>
              <Link href="/TermsPage">
                <span>{content.homesectionTermAndPolicy1}</span>
              </Link>{" "}
              ||
              <Link href="/PrivacyPage">
                <span>{content.homesectionTermAndPolicy2}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <BottomSheetWallet
        open={open}
        onDismiss={onDismiss}
        show={show}
        setOpen={setOpen}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleShow}
        handleShowSwap={handleShowSwap}
        handleCloseSwap={handleCloseSwap}
        handleShowCard={handleShowCard}
        handleCloseCard={handleCloseCard}
        showSwap={showSwap}
        setShowSwap={setShowSwap}
        showCard={showCard}
        ShowCard={setShowCard}
      />
      {/* <AgodModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleShow}
        handleShowSwap={handleShowSwap}
        handleCloseSwap={handleCloseSwap}
        handleShowCard={handleShowCard}
        handleCloseCard={handleCloseCard}
      />
      <SwapModal
        show={showSwap}
        setShow={setShowSwap}
        handleClose={handleCloseSwap}
        handleShow={handleShowSwap}
      />
      <CardAddModal
        show={showCard}
        setShow={setShowCard}
        handleClose={handleCloseCard}
        handleShow={handleShowCard}
      /> */}
    </section>
  );
};

export default Services3;
