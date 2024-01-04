import React, { useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import DarkTheme from "../layouts/Dark";
import EcoSystem1 from "../components/EcoSystem1/Ecosystem1";
import Footer from "../components/FooterNew/Footer";
// import Particles from "react-tsparticles";
// import particlesBlackConfig from "../config/pr-s-black";
// import particlesConfig from "../config/particle-config";
import { useDispatch, useSelector } from "react-redux";
import AgodModal from "../components/Navbar/GetAgodModal";
import { useState } from "react";
import BottomSheetWallet from "../components/Navbar/BottomSheetWallet";
import { referalEarningsFn } from "../store/actions/user/user";

const Ecosystem = ({ blackStar }) => {
  const navbarRef = React.useRef(null);
  const address = useSelector((e) => e.ContentReducer.metaMaskAccount);
  const logoRef = React.useRef(null);
  const content = useSelector(e => e.ContentReducer.content);
  const dispatch = useDispatch();
  // React.useEffect(() => {
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

  useEffect(() => {
    if (address) {
      dispatch(getMetamaskUser());
      dispatch(balanceMetamaskUser(window));
    }
  }, []);
  useEffect(() => {
    if (address) {
      dispatch(investmentRecordsFn(window));
    }
  }, [address]);

  function onDismiss() {
    setOpen(false);
    handleCloseSwap()
    handleCloseCard()
  }

  return (
    <DarkTheme>
      <div style={{ position: 'relative' }}>
        {/* <Particles
          id="particles-js"
          options={blackStar ? particlesBlackConfig : particlesConfig}
        /> */}
        <Navbar transition={false} />
        <EcoSystem1 />
        <div className="getAgodText">
          <p>
            {
              content.heading5Para2
            }
            {/* Agod, born as an ecosystem for the community and accessible to everyone, looks to encourage users to explore the crypto universe and<br/>expand their investment horizons and help them find other ways to obtain greater benefits in this evolving world. */}
          </p>
          <p>
            {
              content.heading5Para3
            }
            {/* Join us and explore the expanding ecosystem of AGOD, where limitless investment possibilities are there for the taking. */}
          </p>
          <p className="getAgodP" onClick={()=>{
            setOpen(true)
          }}>
            {
              content.head1ng5Link2

            }
            {/* Get AGOD now */}
          </p>
        </div>
        {/* <Intro4 />
      <Team />
      <AboutUs3 />
      <Services3 />
      <MinimalArea2 />
      <Footer /> */}
        <Footer />
      </div>
        {/* <AgodModal
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
        /> */}
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
    </DarkTheme>
  );
};

export default Ecosystem;