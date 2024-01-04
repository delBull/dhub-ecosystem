import React from "react";
import Navbar from "../../components/Navbar/navbar";
import DarkTheme from "../../layouts/Dark";
import Terms1 from "../../components/Terms/terms";
import Footer from "../../components/FooterNew/Footer";
/*import Services4 from "../../components/Services4/services4";*/

const Terms = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  return (
    <DarkTheme>
      <Navbar  />
      <Terms1 />
      <Footer />
    </DarkTheme>
  );
};

export default Terms;