import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particle-config";
import { store } from "../store/store";
import { Provider, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Agod-Ecosystem</title>
          <link rel="icon" href="/img/favicon.ico" />
        </Head>
        <Particles id="particles-js" options={particlesConfig} />
        <Cursor />
        <LoadingScreen />
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          pauseOnVisibilityChange
          closeOnClick
          pauseOnHover
          toastStyle={{ backgroundColor: "black" }}
          style={{ zIndex: 9999999999999 }}
        />
        <ScrollToTop />
        <Script id="wow" src="/js/wow.min.js"></Script>
        <Script
          strategy="beforeInteractive"
          id="splitting"
          src="/js/splitting.min.js"
        ></Script>
        <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
        <Script
          id="isotope"
          strategy="beforeInteractive"
          src="/js/isotope.pkgd.min.js"
        ></Script>
        {/* <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script> */}
      </Provider>
    </>
  );
}

export default MyApp;
