import React from "react";
import Navbar from "../components/Navbar/navbar";
import DarkTheme from "../layouts/Dark";
import Staking1 from "../components/Staking/Staking1";
import Footer from "../components/FooterNew/Footer";
import { useSelector } from "react-redux";
import NavbarHome from "../components/Navbar/NavbarHome";
import { addContent } from "../store/Constant";

const Staking = ({ blackStar }) => {
  const content = useSelector(e => e.ContentReducer.content)

  return (
    <DarkTheme>
      <div style={{ position: 'relative' }}>

        <NavbarHome transition={false} />
        <Staking1 />
      
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Staking;
