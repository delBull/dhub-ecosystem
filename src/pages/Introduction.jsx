import React from "react";
import Navbar from "../components/Navbar/navbar";
import DarkTheme from "../layouts/Dark";
import IntroductionNew from "../components/Introductiov/IntroductionNew";
import Footer from "../components/FooterNew/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContent, waitingListMap } from "../store/Constant";
import NavbarHome from "../components/Navbar/NavbarHome";
import BottomSheetWallet from "../components/Navbar/BottomSheetWallet";
import { useState } from "react";
import { referalEarningsFn } from "../store/actions/user/user";

const Introduction = ({ blackStar }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const dispatch = useDispatch();

  const waitList = React.useRef(null)
  const buyList = React.useRef(null)

  useEffect(() => {
    console.log(blackStar)
  }, [blackStar])

  const content = useSelector(e => e.ContentReducer.content)

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
    <>
      <NavbarHome transition={false}/>
      <DarkTheme>
        <div style={{ position: 'relative' }}>

          <IntroductionNew />
          <div className="getAgodText">
            <p>
              {addContent(content.learnpara10).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </p>
            <p>
              {addContent(content.learnpara11).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </p>
            <p className="getAgodP" onClick={()=>{
              setOpen(true)
            }}>
              {addContent(content.learnpara12).map((a, i) => (
                <>
                  {a}
                  <br />
                </>
              ))}
            </p>
            <div className="loadingSymbolMobileShow ">
                  <img src="/img/newassets/degradedframes.png"/>
            </div>
          </div>

          {/* <div className="withScroll" onMouseOver={() => {
              waitList.current.classList.remove('waitListEffect')
              buyList.current.classList.add('buyListEffect')
            }}
              onMouseOut={() => {
                waitList.current.classList.add('waitListEffect')
                buyList.current.classList.remove('buyListEffect')
              }}
            > */}
              {/* <div className="innerWithScroll">
                <div ref={waitList} className="withScrollText waitList waitListEffect">
                  {waitingListMap(content.homesectionList1 ? content.homesectionList1 : []).map((a, i) => (
                    <span>{a}</span>
                  ))} */}
                  {/* <span>A</span> */}
                  {/* <span>I</span> */}
                  {/* <span>T</span> */}
                  {/* <span>I</span> */}
                  {/* <span>N</span> */}
                  {/* <span>G</span> */}
                  {/* <span> </span> */}
                  {/* <span>L</span> */}
                  {/* <span>I</span> */}
                  {/* <span>S</span> */}
                  {/* <span>T</span> */}
                {/* </div>
                <div ref={buyList} className="withScrollText buyList">
                  {waitingListMap(content.homesectionList2 ? content.homesectionList2 : [] ).map((a, i) => (
                    <span>{a}</span>
                  ))} */}
                  {/* <span>U</span> */}
                  {/* <span>Y</span> */}
                {/* </div>
              </div> */}
            {/* </div> */}
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
    </>
  );
};

export default Introduction;
