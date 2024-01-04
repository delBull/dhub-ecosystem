// import React, { useState } from 'react'
// import { BottomSheet } from 'react-spring-bottom-sheet'
// import { AiOutlineInfoCircle } from 'react-icons/ai'
// import { useSelector } from 'react-redux'
// import SwapModal from './SwapModal'
// import CardAddModal from './CardAddModal'
// import { OverlayTrigger, Tooltip } from 'react-bootstrap'

// function BottomSheetWallet({
//     open,
//     onDismiss,
//     show,
//     setShow,
//     handleClose,
//     handleShow,
//     handleShowSwap,
//     handleShowCard,
//     handleCloseSwap,
//     setOpen,
//     handleCloseCard,
//     showSwap,
//     setShowSwap,
//     showCard,
//     setShowCard
// }) {
//     const content = useSelector(e => e.ContentReducer.content)
//     const [infoToggle, setInfoToggle] = useState(false)
//     return (
//         <BottomSheet open={open} onDismiss={onDismiss} className="bottomSheetClass" >
//             <div className="bttomSheetHeader">
//                 {showSwap || showCard  ?
//                null
//                 : 
//                     <>
//                         <h2 className="connWallet">{content.connectAWallet}</h2>
//                         <div className='innerConnWallet'>
//                         {/* <OverlayTrigger
//           key={'top'}
//           placement={'top'}

//           overlay={
//             <Tooltip id={`tooltip-${'top'}`}>
//               ( Coming Soon )
//             </Tooltip>
//           }
//         > */}
//                             <div className="iconsWalletDiv" onClick={() => {
//                                 if (!window?.ethereum?.isMetaMask) {
//                                     window.open("https://metamask.io/", "_blank");
//                                 } else {
//                                     // onDismiss()
//                                     handleShowSwap()
//                                 }
//                             }}>
//                                 <div className="iconsWallet">
//                                     <img className='walletIcon' src='/img/metamask.webp' />
//                                 </div>
//                                 <p>MetaMask</p>
//                             </div>
//                             {/* </OverlayTrigger>
//                             <OverlayTrigger
//           key={'top'}
//           placement={'top'}

//           overlay={
//             <Tooltip id={`tooltip-${'top'}`}>
//               ( Coming Soon )
//             </Tooltip>
//           }
//         > */}

//                             <div className="iconsWalletDiv" onClick={() => {
//                                 // onDismiss()
//                                 handleShowCard()
//                             }}>
//                                 <div className="iconsWallet">
//                                     <img className='walletIcon' src='/img/cardImage.png' />
//                                 </div>
//                                 <p>{content.creditDebit}</p>
//                             </div>
//                             {/* </OverlayTrigger> */}
//                         </div>
//                     </>
//                     }
//             </div>
//             <div className="bttomSheetBody">
//                 <div className='bttomSheetBodyInner'>
//                     {showSwap ?
//                         <SwapModal
//                             show={showSwap}
//                             setShow={setShowSwap}
//                             handleClose={handleCloseSwap}
//                             handleShow={handleShowSwap}
//                             setOpen={setOpen} />
//                         :
//                         showCard ?
//                         <CardAddModal
//                         show={showCard}
//                         setShow={setShowCard}
//                         handleClose={handleCloseCard}
//                         handleShow={handleShowCard}
//                         setOpen={setOpen}
//                       />
//                         :
//                         <>
//                         <div className='infoButtonAgodModalDiv'>

//                             <button className='infoButtonAgodModal infoButtonAgodBottom ' onClick={() => setInfoToggle(!infoToggle)}>
//                                 <AiOutlineInfoCircle /> Info
//                             </button>
//                             {infoToggle ?
//                                 <>
//                                     <h3 className='rightParth3'>{content.getAgodModelHeading}</h3>
//                                     <p>
//                                         {content.getAgodModelPara1}
//                                     </p>
//                                     <p>{content.getAgodModelPara2}</p>
//                                     <p>{content.getAgodModelPara3}</p>
//                                 </>
//                                 :
//                                 <>
//                                     <h3 className='rightParth3'>{content.getAgodBottomHeading1}</h3>
//                                     <p>
//                                         {content.getAgodBottomPara1}
//                                     </p>
//                                     <h3 className='rightParth3'>{content.getAgodBottomHeading2}</h3>
//                                     <p>{content.getAgodBottomHeadPara2}</p>
//                                 </>

//                             }
//                         </div>
//                         </>
//                     }
//                 </div>

//             </div>
//         </BottomSheet>
//     )
// }

// export default BottomSheetWallet
import React, { useEffect, useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import SwapModal from './SwapModal'
import CardAddModal from './CardAddModal'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { getDateCheck } from '../../store/Constant'

function BottomSheetWallet({
    open,
    onDismiss,
    show,
    setShow,
    handleClose,
    handleShow,
    handleShowSwap,
    handleShowCard,
    handleCloseSwap,
    setOpen,
    handleCloseCard,
    showSwap,
    setShowSwap,
    showCard,
    setShowCard
}) {
    const content = useSelector(e => e.ContentReducer.content)
    const [infoToggle, setInfoToggle] = useState(false)

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

    const [launch, setLaunch] = useState(false)

    const getDateCheck = () => {
       

        // },1000)
    }

    // useEffect(() => {
    //     setInterval(() => {
    //         // let refreshDelayMs = 1000;
    //         // console.log('dsadasds')
    //         // setInterval(()=>{
    //         let LaunchDate = new Date(calcTime('utc', '+0', new Date('Sat Feb 02 2023 08:00:00 GMT+0500 (Pakistan Standard Time)'))).getTime();
    //         // let LaunchDate = new Date(calcTime('utc', '+0', new Date('Sat Jan 31 2023 10:46:00 GMT+0500 (Pakistan Standard Time)'))).getTime();
    //         let nowDate = new Date(calcTime('utc', '+0', new Date())).getTime();
    //         if (LaunchDate < nowDate) {
    //             // console.log('true')
    //             setLaunch(true)
    //         } else {
    //             // console.log(LaunchDate , nowDate)
    //             // console.log('false')
    //             setLaunch(false)
    //         }
    //     }, 1000)
    // }, [])

    useEffect(() => {
        console.log(launch)
    }, [launch])
    return (
        <BottomSheet open={open} onDismiss={onDismiss} className="bottomSheetClass" >
            {/* {!launch ? 
             <div className="bttomSheetHeader">
             {showSwap || showCard ?
                 null
                 :
                 <>
                     <h2 className="connWallet">{content.connectAWallet}</h2>
                     <div className='innerConnWallet'>
                         <OverlayTrigger
       key={'top'}
       placement={'top'}
       
       overlay={
         <Tooltip id={`tooltip-${'top'}`}>
           ( Coming Soon )
         </Tooltip>
       }
     >
                         <div className="iconsWalletDiv" onClick={() => {
                             if (!window?.ethereum?.isMetaMask) {
                                 window.open("https://metamask.io/", "_blank");
                             } else {
                                 // onDismiss()
                                //  handleShowSwap()
                             }
                         }}>
                             <div className="iconsWallet">
                                 <img className='walletIcon' src='/img/metamask.webp' />
                             </div>
                             <p>MetaMask</p>
                         </div>
                         </OverlayTrigger>
                         <OverlayTrigger
       key={'top'}
       placement={'top'}
       
       overlay={
         <Tooltip id={`tooltip-${'top'}`}>
           ( Coming Soon )
         </Tooltip>
       }
     >

                         <div className="iconsWalletDiv" onClick={() => {
                            //  onDismiss()
                            //  handleShowCard()
                         }}>
                             <div className="iconsWallet">
                                 <img className='walletIcon' src='/img/cardImage.png' />
                             </div>
                             <p>{content.creditDebit}</p>
                         </div>
                         </OverlayTrigger>
                     </div>
                 </>
             }
         </div>
            : */}
            <div className="bttomSheetHeader">
                {showSwap || showCard ?
                    null
                    :
                    <>
                        <h2 className="connWallet">{content.connectAWallet}</h2>
                        <div className='innerConnWallet'>
                            {/* <OverlayTrigger
          key={'top'}
          placement={'top'}
          
          overlay={
            <Tooltip id={`tooltip-${'top'}`}>
              ( Coming Soon )
            </Tooltip>
          }
        > */}
                            <div className="iconsWalletDiv" onClick={() => {
                                if (!window?.ethereum?.isMetaMask) {
                                    window.open("https://metamask.io/", "_blank");
                                } else {
                                    // onDismiss()
                                    handleShowSwap()
                                }
                            }}>
                                <div className="iconsWallet">
                                    <img className='walletIcon' src='/img/metamask.webp' />
                                </div>
                                <p>MetaMask</p>
                            </div>
                            {/* </OverlayTrigger>
                            <OverlayTrigger
          key={'top'}
          placement={'top'}
          
          overlay={
            <Tooltip id={`tooltip-${'top'}`}>
              ( Coming Soon )
            </Tooltip>
          }
        > */}

                            <div className="iconsWalletDiv" onClick={() => {
                                // onDismiss()
                                handleShowCard()
                            }}>
                                <div className="iconsWallet">
                                    <img className='walletIcon' src='/img/cardImage.png' />
                                </div>
                                <p>{content.creditDebit}</p>
                            </div>
                            {/* </OverlayTrigger> */}
                        </div>
                    </>
                }
            </div>
            {/* } */}
            <div className="bttomSheetBody">
                <div className='bttomSheetBodyInner'>
                    {showSwap ?
                        <SwapModal
                            show={showSwap}
                            setShow={setShowSwap}
                            handleClose={handleCloseSwap}
                            handleShow={handleShowSwap}
                            open={open}
                            setOpen={setOpen} />
                        :
                        showCard ?
                            <CardAddModal
                                show={showCard}
                                setShow={setShowCard}
                                handleClose={handleCloseCard}
                                handleShow={handleShowCard}
                                setOpen={setOpen}
                            />
                            :
                            <>
                                <div className='infoButtonAgodModalDiv'>

                                    <button className='infoButtonAgodModal infoButtonAgodBottom ' onClick={() => setInfoToggle(!infoToggle)}>
                                        <AiOutlineInfoCircle /> Info
                                    </button>
                                    {infoToggle ?
                                        <>
                                            <h3 className='rightParth3'>{content.getAgodModelHeading}</h3>
                                            <p>
                                                {content.getAgodModelPara1}
                                            </p>
                                            <p>{content.getAgodModelPara2}</p>
                                            <p>{content.getAgodModelPara3}</p>
                                        </>
                                        :
                                        <>
                                            <h3 className='rightParth3'>{content.getAgodBottomHeading1}</h3>
                                            <p>
                                                {content.getAgodBottomPara1}
                                            </p>
                                            <h3 className='rightParth3'>{content.getAgodBottomHeading2}</h3>
                                            <p>{content.getAgodBottomHeadPara2}</p>
                                        </>

                                    }
                                </div>
                            </>
                    }
                </div>

            </div>
        </BottomSheet>
    )
}

export default BottomSheetWallet