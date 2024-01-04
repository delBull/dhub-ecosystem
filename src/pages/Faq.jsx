import React, { useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import Team from "../components/Team/team";
import DarkTheme from "../layouts/Dark";
import Staking1 from "../components/Staking/Staking1";
import Faq1 from "../components/Faq1/Faq1";
// import Particles from "react-tsparticles";
// import particlesBlackConfig from "../config/pr-s-black";
// import particlesConfig from "../config/particle-config";
import Footer from "../components/FooterNew/Footer";
import { useSelector } from "react-redux";
import NavbarHome from "../components/Navbar/NavbarHome";
import { addContent } from "../store/Constant";
import BottomSheetWallet from "../components/Navbar/BottomSheetWallet";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { referalEarningsFn } from "../store/actions/user/user";
const Faq = ({ sliderRef, blackStar }) => {
  const content = useSelector(e => e.ContentReducer.content)
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const dispatch = useDispatch();
  const ref = React.useRef(null);
  // useEffect(() => {
  //   var navbar = navbarRef.current;
  //   if (window.pageYOffset > 300) {
  //     navbar.classList.add("nav-scroll");
  //   } else {
  //     navbar.classList.remove("nav-scroll");
  //   }
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 300) {
  //       navbar.classList.add("nav-scroll");
  //     } else {
  //       navbar.classList.remove("nav-scroll");
  //     }
  //   });
  // }, [navbarRef]);
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
      setOpen(true)
      handleShowSwap();
    }
  }, []);

  function onDismiss() {
    setOpen(false);
    handleCloseSwap()
    handleCloseCard()
  }




  return (
    <DarkTheme>
      <div style={{position:'relative'}}>
        {/* <Particles
          id="particles-js"
          options={blackStar ? particlesBlackConfig : particlesConfig}
        /> */}
      <NavbarHome transition={false} />
      <header ref={sliderRef} className="particles FAQsection circle-bg valign">
        <div ref={ref} id="container" className="">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="cont text-center">
             
                <p className="helpCenterP">
                  {content.faqsline1}
                </p>
                <h1>
                  {/* <span
                    className="color-font"
                    style={{ lineHeight: "1.595238125" }}
                  > */}
                    {content.faqsline2}
                  {/* </span> */}
                </h1>
                <p  className="helpCenterP">
                  {content.faqsline3}
                  </p>
              </div>
              <Faq1 />
            </div>
          </div>
        </div>
        {/* <p className="getAgodP" onClick={()=>{
              setOpen(true)
            }}>
              {addContent(content.learnpara12).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </p> */}
        {/* <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
        <div className="line bottom left"></div> */}
      </header>
      <Footer />
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
    </DarkTheme>
  );
};

export default Faq;
