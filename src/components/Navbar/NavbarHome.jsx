/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { conntent } from "../../store/actions/Content";
import axios from "axios";
// import toast from "../../Toast/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AgodModal from "./GetAgodModal";
import { myLoader } from "../../store/Constant";
import Image from "next/image";
import SwapModal from "./SwapModal";
import CardAddModal from "./CardAddModal";
import "react-spring-bottom-sheet/dist/style.css";
import {
  balanceMetamaskUser,
  DisconnectMetaMask,
  getMetamaskUser,
  investmentRecordsFn,
  referalEarningsFn,
} from "../../store/actions/user/user";
import { BottomSheet } from "react-spring-bottom-sheet";
import BottomSheetWallet from "./BottomSheetWallet";
const NavbarHome = ({ lr, nr, theme, transition }) => {
  const [openModal, setopenModal] = useState(false);
  const [isLearnModal, setisLearnModal] = useState(false);
  const [Modal, setModal] = useState(false);
  const [ModalActive, setModalActive] = useState("Learn");
  const content = useSelector((e) => e.ContentReducer.content);
  const address = useSelector((e) => e.ContentReducer.metaMaskAccount);
  const connectionType = useSelector((e) => e.ContentReducer.connectionType);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(false);
  useEffect(() => {
    const langUrl = new URL(window.location);
    const lang = langUrl.searchParams.get("lang");
    console.log(lang, "langlang");
    if (lang === "esp") {
      ChangeLanguage(false);
    } else if (lang === "eng") {
      ChangeLanguage(true);
    } else {
      dispatch(conntent(JSON.parse(localStorage.getItem("language"))));
      setLang(JSON.parse(localStorage.getItem("language")));
    }
  }, []);
  // useEffect(()=>{
  //   dispatch(conntent(JSON.parse(localStorage.getItem('language'))||false))
  //   setLang(JSON.parse(localStorage.getItem('language'))||false)
  // },[])
  // useEffect(() => {
  //   dispatch(conntent(true))
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem("language", lang);

  // }, [lang])
  // useEffect(() => {
  //   setLang(content)
  // }, [content])

  const ChangeLanguage = (ev) => {
    dispatch(conntent(ev));
    localStorage.setItem("language", ev);
    setLang(ev);
  };
  const validateEmail = (email) => {
    // return String(email)
    //   .toLowerCase()
    //   .match(
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   );
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(email);
  };
  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };

  const [email, setEmail] = useState("");
  // const subscription = () => {
  //   console.log('/subscription')
  //   if (validateEmail(email)) {

  //     let data = {
  //       email: email
  //     }
  //     axios.post('/emailSubscribe', data).then((res) => {
  //       toast({ type: "success", message: "Your email has been sucessfully subscribed!" })
  //       setEmail('')
  //     }).catch((error)=>{
  //       toast({ type: "error", message: error.response.data })
  //     })
  //   } else {
  //     toast({ type: "error", message: "Enter a Valid Email Address!" })
  //     // alert('error')
  //   }
  // }

  const subscription = () => {
    // toast.success('dsadasdsadas')
    console.log("/subscription");
    if (!validateEmail(email)) {
      toast.error("Enter a Valid Email Address!");
      // toast({ type: "error", message: "Enter a Valid Email Address!" })
      // invalidEmailError();
      // alert(validateEmail(email))
    } else {
      //  alert(validateEmail(email))

      let data = {
        email: email,
      };
      axios
        .post("/emailSubscribe", data)
        .then((res) => {
          toast.success("Your email has been sucessfully subscribed!");
          // toast({ type: "success", message: "Your email has been sucessfully subscribed!" })
          setEmail("");
        })
        .catch((error) => {
          console.log(error.response);
          toast.error(error.response.data);
          // toast({ type: "error", message: error.response.data })
        });
    }
  };

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

  useEffect(async () => {
    const { ethereum } = window;
    // const accounts = await ethereum.request({ method: 'eth_accounts' });
    function accountWasChanged(accounts) {
      console.log(accounts);
      if (!accounts[0]) {
        dispatch(DisconnectMetaMask(handleCloseSwap, handleCloseCard));
      }
    }

    const metaProvider = window.ethereum;
    if (metaProvider) {
      metaProvider.on("accountsChanged", accountWasChanged);
    }
  }, []);

  function onDismiss() {
    setOpen(false);
    handleCloseSwap()
    handleCloseCard()
  }

  return (
    <div
      className={`navbar_upperHome showNav ${transition ? "navbarShowTrans" : ""
        }`}
      id="navbar_upper"
    >
      <nav
        ref={nr}
        className={`navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""
          }`}
      >
        <div className="container navbarContainer">
          <div className="DesktopView">
            <Link href="/">
              <a className="logo">
                {theme ? (
                  theme === "themeL" ? (
                    <Image
                      loader={myLoader}
                      src={appData.darkLogo}
                      alt="Picture of the author"
                      height={100}
                      width={100}
                    />
                  ) : (
                    <Image
                      loader={myLoader}
                      src={appData.lightLogo}
                      alt="Picture of the author"
                      height={100}
                      width={100}
                    />
                  )
                ) : (
                  <Image
                    loader={myLoader}
                    src={appData.lightLogo}
                    alt="Picture of the author"
                    height={100}
                    width={100}
                  />
                )}
              </a>
            </Link>
            <div className="nav_links_content">
              <div className="nav_links_container cursor-pointer">
                <p
                  className="nav_links Fonts"
                  onMouseOver={() => {
                    setopenModal(true), setisLearnModal(true);
                  }}
                >
                  {content.navbar1}
                </p>
              </div>
              <div className="nav_links_container cursor-pointer">
                <p
                  className="nav_links Fonts"
                  onMouseOver={() => {
                    setopenModal(true), setisLearnModal(false);
                  }}
                >
                  {content.navbar2}
                </p>
              </div>
            </div>
            {/* <div className="switch">
            <input
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
              onChange={(e) => {
                ChangeLanguage(e.target.checked)
              }}
            />
            <label htmlFor="language-toggle" ></label>
            <span className="on">EN</span>
            <span className="off">SP</span>
          </div> */}
            {/* <p
              className="nav_links Fonts ARROW cursor-pointer"
              style={{ fontSize: "13px" }}
              onClick={handleShow}
            >
              {content.navbar3}
            </p> */}
          </div>
          <div className="TabletView">
            <div onClick={() => setModal(!Modal)}>
              <svg width="40" height="50" viewBox="0 0 136 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="5" x2="136" y2="5" stroke="white" stroke-width="10" />
                <line y1="45" x2="96" y2="45" stroke="white" stroke-width="10" />
              </svg>

            </div>
            <Link href="/">
              <a className="logo">
                {theme ? (
                  theme === "themeL" ? (
                    <div className="img">
                      <Image
                        loader={myLoader}
                        src={appData.darkLogo}
                        alt="Picture of the author"
                        height={100}
                        width={100}
                      />
                    </div>
                  ) : (
                    // <img ref={lr} src={appData.darkLogo} alt="logo" />
                    <div className="img">
                      <Image
                        loader={myLoader}
                        src={appData.lightLogo}
                        alt="Picture of the author"
                        height={100}
                        width={100}
                      />
                    </div>
                    // <img ref={lr} src={appData.lightLogo} alt="logo" />
                  )
                ) : (
                  <div className="img">
                    <Image
                      loader={myLoader}
                      src={appData.lightLogo}
                      alt="Picture of the author"
                      height={100}
                      width={100}
                    />
                  </div>
                  // <img ref={lr} src={appData.lightLogo} alt="logo" />
                )}
              </a>
            </Link>

            {/* <div onClick={() => setModal(!Modal)}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
              </svg>
            </div> */}
          </div>
          {/* <div style={{display:'flex',flexDirection:'row'}}></div> */}

          {/* <div className="contentSwitch">
              <Form.Check type="switch" id="custom-switch" label="" />
          </div> */}
          <p
            className="nav_links Fonts ARROW cursor-pointer hideMob"
            style={{ fontSize: "13px" }}
            onClick={() => {
              setOpen(true)
            }}
          >
            {content.navbar3}
          </p>
          <p
            className="nav_links Fonts ARROW cursor-pointer hidePc"
            style={{ fontSize: "13px" }}
            onClick={() => setOpen(true)}
          >
            {content.navbar3}
          </p>
          <div className="switch hideMob">
            <input
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
              value={lang}
              checked={lang}
              onChange={(e) => {
                ChangeLanguage(e.target.checked);
              }}
            />
            <label
              htmlFor="language-toggle"
              className={lang}
              style={{ marginBottom: "0px" }}
            ></label>
            <span className="on">SP</span>
            <span className="off">EN</span>
          </div>
        </div>
        {/* <div className="TabletView">
          <Link href="/">
            <a className="logo">
              {theme ? (
                theme === "themeL" ? (
                  <img ref={lr} src={appData.darkLogo} alt="logo" />
                ) : (
                  <img ref={lr} src={appData.lightLogo} alt="logo" />
                )
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )}
            </a>
          </Link>
          <div onClick={() => setModal(!Modal)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          </div>
        </div> */}
      </nav>
      {/* {Modal ? */}
      {/* <div className="OverFlow" onClick={() => {
        setModal(false), setModalActive("Learn");
      }} ></div> */}
      <div
        className={Modal ? "SETMODAL OPENTRUE p-3" : "SETMODAL"}
        onBlur={() => setModal(false)}
      >
        <div className="nav_links_Header">
          <Link href="/">
            <a className="logo">
              {theme ? (
                theme === "themeL" ? (
                  <div className="img">
                    <Image
                      loader={myLoader}
                      src={appData.darkLogo}
                      alt="Picture of the author"
                      height={100}
                      width={100}
                    />
                  </div>
                ) : (
                  // <img ref={lr} src={appData.darkLogo} alt="logo" />
                  <div className="img">
                    <Image
                      loader={myLoader}
                      src={appData.lightLogo}
                      alt="Picture of the author"
                      height={100}
                      width={100}
                    />
                  </div>
                  // <img ref={lr} src={appData.lightLogo} alt="logo" />
                )
              ) : (
                <div className="img">
                  <Image
                    loader={myLoader}
                    src={appData.lightLogo}
                    alt="Picture of the author"
                    height={100}
                    width={100}
                  />
                </div>
              )}
            </a>
          </Link>
          <div onClick={() => setModal(!Modal)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
            </svg>
          </div>
        </div>

        <div className="nav_links_content">
          <div
            className="nav_links_container"
            onClick={() => setModalActive("Learn")}
          >
            <p
              className={
                ModalActive === "Learn"
                  ? "nav_links Fonts active"
                  : "nav_links Fonts"
              }
            >
              {content.navbar1}
            </p>
          </div>
          <div className="nav_links_container">
            <p
              className={
                ModalActive === "Explore"
                  ? "nav_links Fonts active"
                  : "nav_links Fonts"
              }
              onClick={() => setModalActive("Explore")}
            >
              {content.navbar2}
            </p>
          </div>
        </div>
        <div className="nav_dropdown_contentMobile">
          {ModalActive === "Learn" ? (
            <div
              className={
                ModalActive === "Learn"
                  ? "MobileModal True"
                  : "MobileModal False"
              }
            >
              <div>
                <Link href="/Introduction">
                  <p className="nav_links cursor-pointer">
                    {content.homesectionNav1Link1}
                  </p>
                </Link>
                <Link href="/Staking">
                  <p className="nav_links cursor-pointer">
                    {content.homesectionNav1Link2}
                  </p>
                </Link>
                <Link href="/Faq">
                  {/* <p className="nav_links">Introduction</p> */}
                  <p className="nav_links cursor-pointer">
                    {content.homesectionNav1Link3}
                  </p>
                </Link>
                <a
                  href="https://agod.gitbook.io/agod-white-papers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <p className="nav_links">Introduction</p> */}
                  <p className="nav_links">
                    {content.homesectionNav1Link5}
                    <sup>↗</sup>
                  </p>
                </a>
                <div>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://twitter.com/AgodProtocol"
                  >
                    <p className="nav_links mb-5 cursor-pointer">
                      {content.homesectionExplore4}
                    </p>
                  </a>
                  {/* <div className="nav_social">
                  <a href="https://www.facebook.com/agodespanol ">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target={"_blank"} href="https://twitter.com/AgodProtocol">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target={"_blank"} href="https://www.instagram.com/AgodProtocol/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target={"_blank"} href="https://t.me/joinchat/pqK7k1A3rf82NGEx">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a target={"_blank"} href="https://www.linkedin.com/company/agodprotocol">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a target={"_blank"} href="https://discord.com/invite/mgnwxa24Ph">
                    <i className="fab fa-discord"></i>
                  </a>
                  <a target={"_blank"} href="https://agodecosystem.medium.com ">
                    <i className="fab fa-medium"></i>
                  </a>
                </div> */}
                </div>
                <div className="navLinkDiv">
                  <p className="nav_links mb-5 cursor-pointer">
                    {content.homesectionNav1Link4}
                  </p>
                  <div className="transInput">
                    <input
                      placeholder={content.homesectionNav1Link4placeHolder}
                      value={email}
                      onKeyDown={(ev) => {
                        if (ev.keyCode === 13) {
                          subscription();
                          // if(ev.keyCode === )
                        }
                      }}
                      onChange={(ev) => {
                        setEmail(ev.target.value);
                      }}
                    />
                    <button className="cursor-pointer" onClick={subscription}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-send"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={
                ModalActive === "Learn"
                  ? "MobileModal False"
                  : "MobileModal True"
              }
            >
              <div>
                <Link href="/Ecosystem">
                  <p className="nav_links cursor-pointer">
                    {content.homesectionExplore}
                  </p>
                </Link>
                <p className="nav_links cursor-pointer">
                  {content.homesectionExplore1}{" "}
                  <span className="coming_soon">{content.comingSoon}</span>
                </p>
                <p className="nav_links cursor-pointer">
                  {content.homesectionExplore2}{" "}
                  <span className="coming_soon">{content.comingSoon}</span>
                </p>
              </div>
              <div>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://twitter.com/AgodProtocol"
                >
                  <p className="nav_links mb-5 cursor-pointer">
                    {content.homesectionExplore3}
                  </p>
                </a>
                {/* <div className="nav_social">
                  <a href="https://www.facebook.com/agodespanol ">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target={"_blank"} href="https://twitter.com/AgodProtocol">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target={"_blank"} href="https://www.instagram.com/AgodProtocol/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target={"_blank"} href="https://t.me/joinchat/pqK7k1A3rf82NGEx">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a target={"_blank"} href="https://www.linkedin.com/company/agodprotocol">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a target={"_blank"} href="https://discord.com/invite/mgnwxa24Ph">
                    <i className="fab fa-discord"></i>
                  </a>
                  <a target={"_blank"} href="https://agodecosystem.medium.com ">
                    <i className="fab fa-medium"></i>
                  </a>
                </div> */}
              </div>
            </div>
          )}
          <div className="changeLangButton hidePc fixedheight">
            <p className="nav_links cursor-pointer">{content.LanguageText}</p>
            <div className="switch ">
              <input
                id="language-toggle"
                className="check-toggle check-toggle-round-flat"
                type="checkbox"
                value={lang}
                checked={lang}
                onChange={(e) => {
                  ChangeLanguage(e.target.checked);
                }}
              />
              <label htmlFor="language-toggle" className={lang}></label>
              <span className="on">SP</span>
              <span className="off">EN</span>
            </div>
          </div>
        </div>
      </div>
      {/* :
        null
      } */}
      <div
        // className={openModal ? "nav_dropdown OPEN" : "nav_dropdown CLOSE"}
        className="nav_dropdown"
      // onBlur={()=>{
      //   setisLearnModal(false);
      //   setopenModal(false);
      // }}
      >
        {openModal || isLearnModal ? (
          <div
            className="OverFlow"
            onMouseOver={() => {
              setopenModal(false), setisLearnModal(false);
            }}
          ></div>
        ) : null}
        <div
          className={
            openModal || isLearnModal
              ? "nav_dropdown_content OPEN"
              : "nav_dropdown_content CLOSE"
          }
          // onMouseOut={() => {
          //   setisLearnModal(false);
          //   setopenModal(false);
          // }}
          onMouseLeave={() => {
            setisLearnModal(false);
            setopenModal(false);
          }}
        >
          <div
            className="vsm-arrow"
            style={
              isLearnModal
                ? { transform: "rotate(225deg)", left: "45.7%" }
                : { transform: "rotate(225deg)", left: "53.5%" }
            }
          ></div>
          {/* {isLearnModal ? ( */}
          <div className={isLearnModal ? "OpenModal Modal" : "Modal Close"}>
            <div className="navLinkDiv">
              <Link href="/Introduction">
                <p className="nav_links">{content.homesectionNav1Link1}</p>
              </Link>
              <Link href="/Staking">
                <p className="nav_links">{content.homesectionNav1Link2}</p>
              </Link>
              <Link href="/Faq">
                {/* <p className="nav_links">Introduction</p> */}
                <p className="nav_links">{content.homesectionNav1Link3}</p>
              </Link>
              <a
                href="https://agod.gitbook.io/agod-white-papers/"
                target="_blank"
                rel="noreferrer"
              >
                {/* <p className="nav_links">Introduction</p> */}
                <p className="nav_links">
                  {content.homesectionNav1Link5}
                  <sup>↗</sup>
                </p>
              </a>
            </div>
            <div className="navLinkDiv">
              <p className="nav_links mb-5 cursor-pointer">
                {content.homesectionNav1Link4}
              </p>
              <div className="transInput">
                <input
                  placeholder={content.homesectionNav1Link4placeHolder}
                  value={email}
                  onKeyDown={(ev) => {
                    if (ev.keyCode === 13) {
                      subscription();
                      // if(ev.keyCode === )
                    }
                  }}
                  onChange={(ev) => {
                    setEmail(ev.target.value);
                  }}
                />
                <button className="cursor-pointer" onClick={subscription}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              isLearnModal
                ? "explore_link_content Modal Close2"
                : "explore_link_content Modal OpenModal"
            }
          >
            <div>
              <Link href="/Ecosystem">
                <p className="nav_links">{content.homesectionExplore}</p>
              </Link>
              <p className="nav_links">
                {content.homesectionExplore1}{" "}
                <span className="coming_soon">*{content.comingSoon}</span>
              </p>
              <p className="nav_links">
                {content.homesectionExplore2}{" "}
                <span className="coming_soon">*{content.comingSoon}</span>
              </p>
            </div>
            <div>

              <p className="nav_links">{content.homesectionExplore3}</p>

              <div className="nav_social">
                <div className="socialIconDiv">
                  <a href={content.facebookLink}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
                <div className="socialIconDiv">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={content.twitterLink}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="socialIconDiv">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={content.instagramLink}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="socialIconDiv">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={content.telegramLink}
                  >
                    <i className="fab fa-telegram"></i>
                  </a>
                </div>
                <div className="socialIconDiv">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={content.linkedInLink}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="socialIconDiv">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={content.mediumLink}
                  >
                    <i className="fab fa-medium"></i>
                  </a>
                </div>
                <div className="socialIconDiv">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={content.tiktokLink}
                  >
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>

                  </a>
                </div>
              </div>
            </div>
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
        setOpen={setOpen}
        
      />
      <SwapModal
        show={showSwap}
        setShow={setShowSwap}
        handleClose={handleCloseSwap}
        handleShow={handleShowSwap}
        setOpen={setOpen}
      />
      <CardAddModal
        show={showCard}
        setShow={setShowCard}
        handleClose={handleCloseCard}
        handleShow={handleShowCard}
        setOpen={setOpen}
      /> */}
    </div>
  );
};

export default NavbarHome;
