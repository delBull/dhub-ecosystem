import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";
import { useEffect } from "react";

const LoadingScreen = () => {





  function getOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"],
      os = null

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "Mac OS"
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = "iOS"
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows"
    } else if (/Android/.test(userAgent)) {
      os = "Android"
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux"
    }
    return os
  }

  // console.log('Operating System',getOS());
  React.useEffect(() => {
    getOS()
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace(getOS());

      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  }, []);
  // useEffect(()=>{
  //   setIsMac(ismac)
  // },[])
  // const ismac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  // console.log('isMac',ismac)
  return (
    <>
      <div className={`${appData.showLoading === true ? "showX hideMob" : "hideX hideMob"}`}>
        <div className="loaderNew" id="loaderNew">
       
          <video width="320" height="240" muted autoPlay loop>
            <source src="/img/loadergif.webm" type="video/webm"/>
              loading
          </video>
          {/* <video width="320" height="240" muted autoPlay loop>
            <source src="/img/loaderforsafari.mp4" type='video/mp4; codecs="hvc1"'/>
              loading
          </video> */}
          
        </div>
              </div>

    </>
  );
};

export default LoadingScreen;
