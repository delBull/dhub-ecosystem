import Image from "next/image";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
// import Swiper, { Navigation, Pagination } from 'swiper'
import { myLoader } from "../../store/Constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Dater from "../../components/Slider/Picker";

function RoadMap() {
  const [roadMapData, setRoadMapData] = useState([
    {
      id: '1',
      value: "1.- AGOD Private Sale"
    },
    {
      id: '2',
      value: "2.- Pandoras Finance; The Beginning"
    },
    {
      id: '3',
      value: "3.- Pandoras Genesis NFTs Offering"
    },
    {
      id: '4',
      value: "4.- PBOX Offering"
    },
    {
      id: '5',
      value: "5.- Real State Capitalization; NFTs Property Offering"
    },
    {
      id: '6',
      value: "6.- Businesses & Startups; NFTs Investment Offering"
    },
    {
      id: '7',
      value: "7.- Abloc IEO"
    },
    {
      id: '8',
      value: "8.- Dreamhub Launch; Genesis NFTs Offering"
    },
    {
      id: '9',
      value: "9.- AGOD ICO (round 2)"
    },
    {
      id: '10',
      value: "10.- ADEX IDO; ADEX token Offering"
    },
    {
      id: '11',
      value: "11.- Rabbitty; The beginning"
    },
    {
      id: '12',
      value: "12.- Rabbitty ICO"
    },
    { 
      id:'13',
      value: "13.- Ra Wallet; Genesis NFTs Offering"
     },
  ]);
  const content = useSelector((e) => e.ContentReducer.content);

  const [activeRoad, setActiveRoad] = useState("1");
  const [activeRoadText, setActiveRoadText] = useState("AGOD Private Sale");
  const [height, setheight] = useState("");
  const sliderRef = useRef();
  useEffect(() => {
    if (document.getElementsByClassName("countText").length) {
      setheight(document.getElementsByClassName("countText")[0].clientHeight);
    }
  }, []);
  const [index, setIndex] = React.useState(0)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    centerMode: true,
    initialSlide: 1,
    // adaptiveHeight: true,
    // focusOnSelect: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      setActiveRoad(currentSlide === 0 ? 13 : currentSlide);
      console.log("after change", currentSlide);
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "100px",
          // adaptiveHeight: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    // draggable:true
  };
  // useEffect(()=>{
  //   sliderRef.current.slickGoTo(1)
  // },[sliderRef])

  const data = [
    {
      id: "1",
      value: "Testing by leo"
    },
    {
      id: "2",
      value: "Big Bae"
    },
    {
      id: "3",
      value: "Wee bae"
    },
    {
      id: "4",
      value: "Skye"
    },
    {
      id: "5",
      value: "Dreamies"
    }
  ];

  useEffect(()=>{
    console.log(typeof activeRoad,activeRoad,'activeRoad')
  },[activeRoad])

  return (
    <div className="roadMapPage">
      <div className="sepImgOrbitParent">
        <img src="/img/newPage/roadmaporbit.png" className="roadmaporbit" />
      </div>
      {/* <Image 
         loader={myLoader}
         src="img/newPage/roadmaporbit.png"
         alt="Picture of the author"
         height={100}
         width={100}
      /> */}
      <div className="innerRoadMapPage">
        <div className="orbitingText">
          <h3 className="wow fadeIn" data-wow-offset="100">
            <span>{content.homesectionRoadmap}</span>
            <br />
            {content.homesectionRoadmapYear}
          </h3>
          <p></p>
        </div>
        <div className="roadMapContent">
          <div className="roadMaPImageDiv">
            <div className="roadMaPImage">
              <div className="planetImage" id="planetImage" src="">
                {/* <Image
                  loader={myLoader}
                  src="img/newPage/ROADMAPBLANCO(2).png"
                  alt="Picture of the author"
                  height={100}
                  width={100}
                /> */}
              <img src='/img/newPage/ROADMAPBLANCO(2).png' />
              </div>

              <button
                className={`buttonRoadMap active button${activeRoad}`}
              ></button>
              {roadMapData.map((a, i) => (
                <button
                  key={i}
                  // onClick={() => {
                  //   setActiveRoad(i + 1);
                  //   setActiveRoadText(a.text);
                  //   // sliderRef.current.slickGoTo(i + 1);
                  // }}
                  className={`buttonRoadMap ${i + 1 === activeRoad ? "activenone" : ""
                    }  button${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
          <div className="roadMapSpinner">
            <div className="innerRoadMapSpinner">
              {/* <Slider ref={sliderRef} {...settings} className="wheelForPc">
                {roadMapData.map((a, i) => (
                  <div className="roadmapTextDiv">
                    <h3
                      className={`roadmapText ${activeRoad === i + 1 ? "active" : ""
                        }`}
                    >
                      {activeRoad === i + 1 ? (
                        <span className="roadmapTextActImageDiv">
                          <img
                            className="roadmapTextActImage"
                            src="/img/newassets/auraroadmaptext.png"
                          />
                        </span>
                      ) : null}
                      {i + 1}.- {a.value}
                    </h3>
                  </div>
                ))}
              </Slider> */}
              <div className="wheelForMobile">
              <Dater data={roadMapData} setActiveRoad={setActiveRoad} activeRoad={activeRoad} />
              </div>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
