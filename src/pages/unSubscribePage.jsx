import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DarkTheme from "../layouts/Dark";
import NavbarHome from "../components/Navbar/NavbarHome";

const UnSubscribePage = ({}) => {
  const [emailsearch, setemailsearch] = useState("")
  const subscription = () => {
    let email = window.location?.search
      ?.replace("?email=", "")
      .replace("%40", "@");
    let data = {
      email: email,
    };
    axios
      .post("/emailSubscribe", data)
      .then((res) => {
        toast.success("Your email has been sucessfully subscribed!");
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response.data);
        // toast({ type: "error", message: error.response.data })
      });
  };
  const unsubscribeEmail = (email) => {
    let data = {
      email: email,
    };
    axios
      .post("/unsubscribeEmail", data)
      .then((res) => {
        console.log(res);
        toast.success("Your email has been sucessfully unsubscribed!");
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response.data);
        // toast({ type: "error", message: error.response.data })
      });
  };
  useEffect(() => {
    let email = window.location?.search
      ?.replace("?email=", "")
      .replace("%40", "@");
    unsubscribeEmail(email);
    setemailsearch(email)
  }, []);

  return (
    <DarkTheme>
      <div style={{ position: "relative" }}>
        <NavbarHome transition={false} />
        <div className="unsubscribe">
          <p>
            Your email has been sucessfully unsubscribed. <br />
            If you want to resubscribe with{" "}
            <i>{emailsearch || "-"}</i>{" "}
            click here <br />
            <button onClick={subscription}>RESUBSCRIBE</button>
          </p>
        </div>
      </div>
    </DarkTheme>
  );
};

export default UnSubscribePage;
