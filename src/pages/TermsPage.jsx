import React from "react";
import Navbar from "../components/Navbar/navbar";
import DarkTheme from "../layouts/Dark";
import Staking1 from "../components/Staking/Staking1";
import Footer from "../components/FooterNew/Footer";
import { useSelector } from "react-redux";
import Terms from "./homepage/terms";

const TermsPage = ({blackStar}) => {
  const content = useSelector(e => e.ContentReducer.content)

  return (
    <Terms/>
  );
};

export default TermsPage;
