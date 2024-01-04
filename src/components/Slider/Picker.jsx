import WheelPicker, { PickerData } from "react-simple-wheel-picker";
import Link from "next/link";
import React, { useRef, button, useState, useEffect } from "react";

const Dater = (props) => {
  const [objVal, setObjval] = useState("");
const [itemSize,setItemSize] = useState('')
const [sliderSize,setSiderSize] = useState('')
  useEffect(()=>{
    if (window.matchMedia("(min-width: 768px)").matches) {
      setItemSize(60)
      setSiderSize(180)
    }else{
      setItemSize(42)
      setSiderSize(252)
    }

  },[])

  const handleOnChange = (PickerData) => {
    // setObjval(PickerData.value);
    // if (window.matchMedia("(max-width: 768px)").matches) {
    props.setActiveRoad(Number(PickerData.id))
    // console.log(PickerData,'dsadas')
    // }
    // console.log(objVal);
    // props.ObjectChange(objVal);
  };
  return (
    <div
    className="wheelForMobile"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginRight: "20px"
      }}
    >
      <WheelPicker
        className="test"
        data={props.data}
        onChange={handleOnChange}
        height={sliderSize}
        titleText="Enter value same as aria-label"
        itemHeight={itemSize}
        selectedID={props.activeRoad}
        // color="#ccc"
        activeColor="#fff"
        backgroundColor="#fff"
        // selectedID="selectedWheel"
      />
    </div>
  );
};

export default Dater;
