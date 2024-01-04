import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import mouseEffect from "../../common/mouseEffect";
import { detectMob } from "../../store/Constant";

const Cursor = () => {
  const cursorOuter = useRef()
  const cursorInner = useRef()
  React.useEffect(() => {
    mouseEffect();
  }, []);
  useEffect(()=>{
    console.log(cursorOuter,'cursorOuter')
    console.log(cursorInner,'cursorInner')
    if(detectMob()){
      console.log(true,'detectMob')
    }else{
      console.log(false,'detectMob')
    }
  },[])
  return (
    <>
      <div className="mouse-cursor cursor-outer " ref={cursorOuter}>
     
      </div>
      <div className="mouse-cursor cursor-inner" ref={cursorInner}>
      {/* <div className="ClickMeDivOpen">
          Click Me
        </div> */}
      </div>
    </>
  );
};

export default Cursor;
