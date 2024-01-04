import { toast } from "react-toastify";

export const addContent = (text) => {
  return text ? text.split("@@") : [""];
};

export const waitingListMap = (text) => {
  let arr = [];

  if (text && text.length) {
    for (let i = 0; i < text.length; i++) {
      arr.push(text[i]);
    }
  }
  return arr;
};

export const spaceBetween = (text) => {
  return text ? text.split("&nbsp;&nbsp;&nbsp;") : [""];
};

export const myLoader = ({ src, width, quality }) => {
  // return `https://agodprotocol.com/${src}?w=${width}&q=${quality || 75}`
  // return `http:localhost:8000/${src}?w=${width}&q=${quality || 75}`
  return `https://agodprotocol.com/${src}?w=${width}&q=${quality || 75}`;
};

export const shortAddress = (address) => {
  let ad = address;
  // let short = ad.slice(0,6) + '....' + address.slice(address.length - 1 - 4, 4)
  let short = ad.slice(0, 6) + "...." + address.slice(address.length - 4);
  // console.log(address, 'address')
  return short;
};

export const copyFunction = () => {
  let address = localStorage.getItem("AgodTokenId");
  let urlOrigin = window.location.origin;
  let url = `${urlOrigin}/?referId=${address}`;
  // Get the text field
  // var copyText = 'sadasdsdasda';

  // // Select the text field
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(url);
  toast.success("Refer link has been copied");
  // Alert the copied text
  // alert("Copied the text: " + url);
};



export function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}


const calcTime = (city, offset, date) => {

  // create Date object for current location
  let d = new Date(date);

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

  // create new Date object for different city
  // using supplied offset
  let nd = new Date(utc + (3600000 * offset));

  // return time as a string
  return nd;

}

export const getDateCheck = () =>{
  let refreshDelayMs = 1000;
  // setInterval(()=>{
    let LaunchDate = new Date(calcTime('utc', '+0', new Date('Sat Feb 02 2023 08:00:00 GMT+0500 (Pakistan Standard Time)'))).getTime();
    let nowDate = new Date(calcTime('utc', '+0', new Date())).getTime();
    if(LaunchDate === nowDate){
      return(true)
    }else{
      setTimeout(getDateCheck, refreshDelayMs)
      return(false)
    }

  // },1000)
}