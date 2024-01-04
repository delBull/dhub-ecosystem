const loadingPace = (os) => {

  setTimeout(() => {
    // document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loaderNew").classList.add("isdone");
    if (document.getElementById("planetImage")) {
      // document.getElementById("planetImage").classList.add("showPlanet");
    }
    //   setTimeout(() => {
    //   if (document.getElementById("navbar_upper")) {
    //     document.getElementById("navbar_upper").classList.add("showNav");
    //   }
    // },6000)

    //   setTimeout(() => {
    //     if (document.getElementById("headingMain")) {
    //       document.getElementById("headingMain").classList.add("showHeadMain");
    //     }
    //   },6500)
    // document.querySelector(".planetImage");
    if (document.querySelector(".navbar_upperHome")) {
      document.querySelector(".navbar_upperHome").classList.add("showNav");
    }
    if (document.querySelector(".headingMain")) {
      document.querySelector(".headingMain").classList.add("showHeadMain");
    }

    setTimeout(() => {
      document.getElementById("loaderNew").style.display = 'none';
    }, 1000)
    // document.querySelector(".loaderNew").sty;
  }, os ===  "Mac OS" || os === "Windows" || os === "Linux" ? 2000 : 0)

  // console.log('dsad')
  // Pace.on("start", function () {
  //   // document.querySelector("#preloader").classList.remove("isdone");
  //   // document.querySelector(".loaderNew").classList.remove("isdone");
  //   // document.querySelector(".planetImage").classList.remove("showPlanet");

  //   // if(document.getElementById("planetImage")){
  //   //   document.getElementById("planetImage").classList.remove("showPlanet");
  //   // }

  //   // if(document.getElementById("navbar_upper")){
  //   //   document.getElementById("navbar_upper").classList.remove("showNav");
  //   // }

  //   // if(document.getElementById("headingMain")){
  //   //   document.getElementById("headingMain").classList.remove("showHeadMain");
  //   // }
  //   // document.querySelector("navbar_upper").classList.remove("showNav");
  // });
  // Pace.on("done", function () {
  //   // document.querySelector("#preloader").classList.add("isdone");
  //   document.querySelector(".loaderNew").classList.add("isdone");
  //   if (document.getElementById("planetImage")) {
  //     document.getElementById("planetImage").classList.add("showPlanet");
  //   }
  //   //   setTimeout(() => {
  //   //   if (document.getElementById("navbar_upper")) {
  //   //     document.getElementById("navbar_upper").classList.add("showNav");
  //   //   }
  //   // },6000)

  //   //   setTimeout(() => {
  //   //     if (document.getElementById("headingMain")) {
  //   //       document.getElementById("headingMain").classList.add("showHeadMain");
  //   //     }
  //   //   },6500)
  //   // document.querySelector(".planetImage");
  //   if (document.querySelector(".navbar_upperHome")) {
  //     document.querySelector(".navbar_upperHome").classList.add("showNav");
  //   }
  //   if (document.querySelector(".headingMain")) {
  //     document.querySelector(".headingMain").classList.add("showHeadMain");
  //   }

  //   setTimeout(() => {
  //     document.getElementById("loaderNew").style.display = 'none';
  //   }, 1000)
  //   // document.querySelector(".loaderNew").sty;

  // });

  // if (document.querySelector("body").classList.contains("pace-done")) {
  //   // document.querySelector("#preloader").classList.add("isdone");
  //   // document.querySelector(".loaderNew").classList.add("isdone");
  // }

  // window.addEventListener("load", () => {
  //   // document.querySelector("#preloader").classList.add("isdone");
  //   // document.querySelector(".loaderNew").classList.add("isdone");
  //   // if (document.querySelector('.pace-running.pace-running')) {
  //   //   document.querySelector('.pace-running.pace-running').classList.remove('pace-running')
  //   // }
  // });
};

export default loadingPace;
