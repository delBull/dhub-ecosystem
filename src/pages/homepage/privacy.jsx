import React from "react";
import Navbar from "../../components/Navbar/navbar";
import DarkTheme from "../../layouts/Dark";
import Privacy1 from "../../components/Privacy/privacy";
import Footer from "../../components/FooterNew/Footer";
/*import Services4 from "../../components/Services4/services4";*/

const Privacy = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  return (
    <DarkTheme>
      <Navbar  />
      <Privacy1 />
      <Footer />
    </DarkTheme>
  );
};

export default Privacy;