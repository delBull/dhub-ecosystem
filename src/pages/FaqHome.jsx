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
import FaqContentHome from "../components/Faq1/FaqContentHome";
import Link from "next/link";
const FaqHome = ({ sliderRef, blackStar }) => {
  const content = useSelector(e => e.ContentReducer.content)
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const ref = React.useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    console.log(el2);

    const el = document.getElementById("container");
    console.log(el);
  }, []);
  return (
    <DarkTheme>
      <div style={{width:'100%'}} >

   
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
              <FaqContentHome />
              {/* <Link href={`/Faq/`}> */}
              <p className="faqmore">
                
                  {content.faqmore}
                </p>
                {/* </Link> */}
            </div>
          </div>
        </div>
      
        {/* <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
        <div className="line bottom left"></div> */}
      </header>
 
      </div>
    </DarkTheme>
  );
};

export default FaqHome;
