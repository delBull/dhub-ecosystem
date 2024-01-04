/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { referalEarningsFn } from "../../store/actions/user/user";
import { addContent } from "../../store/Constant";
import BottomSheetWallet from "../Navbar/BottomSheetWallet";
import CardAddModal from "../Navbar/CardAddModal";
import AgodModal from "../Navbar/GetAgodModal";
import SwapModal from "../Navbar/SwapModal";
// import Image from "img/";
// import './StakingResponsive.css'
const Staking1 = ({ sliderRef, blackStar }) => {
  const content = useSelector((e) => e.ContentReducer.content);
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   // teamSkillsProgress();
  //   setTimeout(() => {
  //     tooltipEffect();
  //   }, 1000);
  // }, []);
  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    console.log(el2);

    // 👇️ use document.getElementById()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const el = document.getElementById("container");
    console.log(el);
  }, []);

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSwap, setShowSwap] = useState(false);

  const handleCloseSwap = () => {
    setShowSwap(false);
    // setOpen(true)
  };
  const handleShowSwap = () => {
    console.log("ShowSwap");
    setShowSwap(true);
  };

  const [showCard, setShowCard] = useState(false);

  const handleCloseCard = () => {
    setShowCard(false);
    // setOpen(true)
  };
  const handleShowCard = () => {
    console.log("ShowCard");
    setShowCard(true);
  };

  useEffect(() => {
    const refUrl = new URL(window.location);
    const refId = refUrl.searchParams.get("referId");
    dispatch(referalEarningsFn(refId,window));
    if (refId) {
      setOpen(true);
      handleShowSwap();
    }
  }, []);

  function onDismiss() {
    setOpen(false);
    handleCloseSwap();
    handleCloseCard();
  }

  return (
    <div className="stakingPage">
      {/* <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      /> */}
      <div className="firstSecStacking">
        <div className="stakingPageHeading viewResponsive responsiveHeadingshow">
          <h2 className="wow fadeIn" data-wow-offset="100">
            {addContent(content.stackingheading1).map((a, i) => (
              <>
                {a}
                <br />
              </>
            ))}
          </h2>
          <div className="stakingPageImage">
            <img src="/img/agodecosystemline.jpg" />
          </div>
          <p className="wow fadeIn mb-3" data-wow-offset="100">
            {addContent(content.stackingheading2).map((a, i) => (
              <>
                {a}
                <br />
              </>
            ))}
          </p>
          <p className="wow fadeIn" data-wow-offset="100">
            {addContent(content.stackingheading3).map((a, i) => (
              <>
                {a}
                <br />
              </>
            ))}
          </p>
        </div>
        <div className="innerStakingPage">
          <div className="stakingPageHeading view">
            <h2 className="wow fadeIn" data-wow-offset="100">
              {addContent(content.stackingheading1).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </h2>
            {/* <div className="stakingPageImage">
            <img src="/img/agodecosystemline.jpg" />
          </div> */}
            <p className="wow fadeIn" data-wow-offset="100">
              {addContent(content.stackingheading2).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </p>
            <p className="wow fadeIn" data-wow-offset="100">
              {addContent(content.stackingheading3).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </p>
          </div>
          <div className="stakingPageContent view">
            <p className="wow fadeIn" data-wow-offset="100">
              {addContent(content.stackingpara1).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
              <br />

              {addContent(content.stackingpara2).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </p>
          </div>
          <div className="stakingPageContentCenter view">
            <p className="wow fadeIn" data-wow-offset="100">
              {addContent(content.stackingpara3).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
              {addContent(content.stackingpara4).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
              {addContent(content.stackingpara5).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
              {/* {addContent(content.stackingpara4).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))} */}
            </p>
          </div>
        </div>
      </div>
      <div className="secondSecStaking">
        <div className="stakingPageContentImg viewResponsive">
          <img src="/img/scroll.svg" />
        </div>
        <div>
          <div className="stakingPageContentCenter viewResponsive">
            <div className="stakingPageContentCenterDiv">
              <p className="wow fadeIn" data-wow-offset="100">
                {addContent(content.stackingpara3).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </p>
            </div>
            <div>
              <p className="wow fadeIn" data-wow-offset="100">
                {addContent(content.stackingpara4).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
                {addContent(content.stackingpara5).map((a, i) => (
                  <>
                    {a}
                    <br />
                  </>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdSecStaking">
        <div className="StakingPageImage3 viewResponsive">
          <img src="/img/newPage/roadmaporbit.png" />
        </div>
        <div className="innerStakingPage2 view">
          <h3 className="wow fadeIn" data-wow-offset="100">
            {addContent(content.stackingheading4).map((a, i) => (
              <>{a}</>
            ))}
            <br />
            {addContent(content.stackingheading5).map((a, i) => (
              <>{a}</>
            ))}
          </h3>

          {/* </button> */}
        </div>
        <div className="innerStakingPage2 backgroundinnerStakingPage2 viewResponsive">
          <img src="/img/newassets/LOGO3D.png" />
          <h3 className="wow fadeIn" data-wow-offset="100">
            {addContent(content.stackingheading4).map((a, i) => (
              <>{a}</>
            ))}
            <br />
            {addContent(content.stackingheading5).map((a, i) => (
              <>{a}</>
            ))}
          </h3>
          <p
            className="wow fadeIn "
            data-wow-offset="100"
            style={{ fontSize: "17px" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            {addContent(content.stackingpara7).map((a, i) => (
              <>
                {a}
                <br />
              </>
            ))}
          </p>
        </div>
          <br />
        <div className="getAgodDiv">
          <p
            className="nav_links Fonts ARROW cursor-pointer "
            style={{ fontSize: "22px" }}
            onClick={() => setOpen(true)}
          >
            {content.navbar3}
          </p>
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
    </div>
  );
};

export default Staking1;
