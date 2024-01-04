import React, { useEffect, useState } from "react";
import Team from "../../components/Team/team";
import DarkTheme from "../../layouts/Dark";
import Intro4 from "../../components/Intro4/intro4";
import AboutUs3 from "../../components/About-us3/about-us3";
import Services3 from "../../components/Services3/services3";
import RoadMap from "../Roadmap/RoadMap";
import NavbarHome from "../../components/Navbar/NavbarHome";
import { waitingListMap } from "../../store/Constant";
// import 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap'
// import 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap'
// https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap
import { useDispatch, useSelector } from "react-redux";
import { balanceMetamaskUser, checkUSDCBal, checkUSDTBal, connnectMetamaskUser, GetcheckStripePayment, getCurrentProvider, getMetamaskUser, investmentRecordsFn } from "../../store/actions/user/user";
import Faq from "../Faq";
import Faq1 from "../../components/Faq1/Faq1";
import FaqHome from "../FaqHome";
import AgodToken from "../../components/Agod-Token/AgodToken";
import PreSale from "../../components/Pre-sale/PreSale";

const Homepage5 = ({ blackStar }) => {
  const content = useSelector(e => e.ContentReducer.content)
  const dispatch = useDispatch()
  // console.log(window.location.pathname)
  const waitList = React.useRef(null)
  const buyList = React.useRef(null)

  const [textTeamSec, setTextTeamSec] = useState(false)
  const [textTeamSec2, setTextTeamSec2] = useState(false)

  const [textAboutSec0, setTextAboutSec0] = useState(false)
  const [textAboutSec1, setTextAboutSec1] = useState(false)
  const [textAboutSec2, setTextAboutSec2] = useState(false)
  const [textAboutSec3, setTextAboutSec3] = useState(false)
  const [textAboutSec4, setTextAboutSec4] = useState(false)
  const address = useSelector(e => e.ContentReducer.metaMaskAccount)

  

  useEffect(() => {
    window.addEventListener('scroll', function () {
      var textTeamSecElm = document.querySelector('#textTeamSec');
      var textTeamSec2Elm = document.querySelector('#textTeamSec2');

      var textAboutSec0Elm = document.querySelector('#textAboutSec0');
      var textAboutSec1Elm = document.querySelector('#textAboutSec1');
      var textAboutSec2Elm = document.querySelector('#textAboutSec2');
      var textAboutSec3Elm = document.querySelector('#textAboutSec3');
      var textAboutSec4Elm = document.querySelector('#textAboutSec4');

      // checking whether fully visible
      if (textTeamSecElm) {
        var position = textTeamSecElm.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          if (!textTeamSec) {
            setTextTeamSec(true)
          }
        } else {
          // if (textTeamSec) {
          setTextTeamSec(false)
          // }
        }
      }
      if (textTeamSec2Elm) {
        var position2 = textTeamSec2Elm.getBoundingClientRect();
        if (position2.top >= 0 && position2.bottom <= window.innerHeight) {
          if (!textTeamSec2) {
            setTextTeamSec2(true)
          }
        } else {
          // if (textTeamSec2) {
          setTextTeamSec2(false)
          // }
        }
      }
      if (textAboutSec0Elm) {
        var position = textAboutSec0Elm.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          if (!textAboutSec0) {
            setTextAboutSec0(true)
          }
        } else {
          // if (textTeamSec2) {
          setTextAboutSec0(false)
          // }
        }
      }
      if (textAboutSec1Elm) {
        var position = textAboutSec1Elm.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          if (!textAboutSec1) {
            setTextAboutSec1(true)
          }
        } else {
          // if (textTeamSec2) {
          setTextAboutSec1(false)
          // }
        }
      }
      if (textAboutSec2Elm) {
        var position = textAboutSec2Elm.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          if (!textAboutSec2) {
            setTextAboutSec2(true)
          }
        } else {
          // if (textTeamSec2) {
          setTextAboutSec2(false)
          // }
        }
      }
      if (textAboutSec3Elm) {
        var position = textAboutSec3Elm.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          if (!textAboutSec3) {
            setTextAboutSec3(true)
          }
        } else {
          // if (textTeamSec2) {
          setTextAboutSec3(false)
          // }
        }
      }
      if (textAboutSec4Elm) {
        var position = textAboutSec4Elm.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          if (!textAboutSec4) {
            setTextAboutSec4(true)
          }
        } else {
          // if (textTeamSec2) {
          setTextAboutSec4(false)
          // }
        }
      }

      // // checking for partial visibility
      // if (position.top < window.innerHeight && position.bottom >= 0) {
      //   console.log('Element is partially visible in screen');
      // }
    });
    dispatch(GetcheckStripePayment())
  }, [])






  return (
    <>
      <div className="bodyDiv">
        {/* <Particles
          id="particles-js"
          options={blackStar ? particlesBlackConfig : particlesConfig}
        /> */}
        <DarkTheme>
          <NavbarHome transition={true} />
          {/* <NavbarHome /> */}
          <div className="withScrollDiv">

            <Intro4 />
            <PreSale />
            <Team textTeamSecActive={textTeamSec}
              textTeamSec2Active={textTeamSec2}
            />
            <AboutUs3
              textAboutSec0Active={textAboutSec0}
              textAboutSec1Active={textAboutSec1}
              textAboutSec2Active={textAboutSec2}
              textAboutSec3Active={textAboutSec3}
              textAboutSec4Active={textAboutSec4}
            />
            {/* <FaqHome /> */}
            {/* <Faq/> */}

            <RoadMap />
            <Services3 />
            {/* <Footer /> */}
            {/* <div className="withScroll" onMouseOver={() => {
              waitList.current.classList.remove('waitListEffect')
              buyList.current.classList.add('buyListEffect')
            }}
              onMouseOut={() => {
                waitList.current.classList.add('waitListEffect')
                buyList.current.classList.remove('buyListEffect')
              }}
            >
              <div className="innerWithScroll">
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
                  {waitingListMap(content.homesectionList2 ? content.homesectionList2 : []).map((a, i) => (
                    <span>{a}</span>
                  ))} */}
            {/* <span>U</span> */}
            {/* <span>Y</span> */}
            {/* </div>
              </div>
            </div> */}
          </div>
        </DarkTheme>
      </div>
    </>

  );
};

export default Homepage5;
