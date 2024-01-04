import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3';
import { balanceOfFn, checkUSDCBal, checkUSDTBal, getCurrentProvider, switchNetwork, totalTokenSold } from '../../store/actions/user/user';
import BottomSheetWallet from '../Navbar/BottomSheetWallet';

function PreSale() {
    const dispatch = useDispatch()
    const days = () => {
        let date_1 = new Date('02/01/2023');
        let date_2 = new Date();
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }
    const getTotalTokensSold = useSelector(e => e.ContentReducer.getTotalTokensSold)
    const address = useSelector((e) => e.ContentReducer.metaMaskAccount);
    const getUSDTBalance = useSelector(e => e.ContentReducer.getUSDTBalance)
    const getUSDCBalance = useSelector(e => e.ContentReducer.getUSDCBalance)
    const totalTokenSoldCard = useSelector(e => e.ContentReducer.totalTokenSoldCard)

    useEffect(()=>{
        console.log(totalTokenSoldCard,'totalTokenSoldCard')
    },[totalTokenSoldCard])
    function numberWithSpace(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    useEffect(() => {
        dispatch(totalTokenSold(window))
    }, [])
    useEffect(() => {
        console.log(getTotalTokensSold, 'getTotalTokensSold')
    }, [getTotalTokensSold])

    // useEffect(() => {
    //     let animate = false
    //     window.addEventListener('scroll', function () {
    //         var presaleContent = document.querySelector('#presaleContent');

    //         if (presaleContent) {
    //             var position = presaleContent.getBoundingClientRect();
    //             if (position.top >= 0 && position.bottom <= window.innerHeight) {
    //                 if (!animate) {
    //                     animate = true;
    //                     [9,8,7,6,5,4,3,2,1].map((a, i) => {
    //                         let index = i + 1
    //                         setTimeout(() => {
    //                             document.getElementById(`load${a}`).style.opacity = 1
    //                         }, 500 + (index * 200))
    //                     })
    //                 }

    //             } else {
    //                 if (animate) {
    //                     animate = false
    //                 }
    //             }
    //         }

    //     });
    // }, [])
    const [day, setDay] = useState(0)
    const [hours, setHours] = useState(0)
    const [mint, setMint] = useState(0)
    const [seconds, setSeconds] = useState(0)
    // let currentProvider = getCurrentProvider();
    // const web3 = new Web3(getCurrentProvider(wind));
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


    useEffect(async () => {
        const metaProvider = await getCurrentProvider(window);
        const accountWasChanged = () => {
            if (metaProvider) {

                metaProvider.on("accountsChanged", (accounts) => {
                    dispatch(
                        checkUSDTBal(window)
                    );
                    dispatch(
                        checkUSDCBal(window)
                    )
                });
            }
        }
        // const chainChange = () => {
        //     if (metaProvider) {
        //         metaProvider.on("chainChanged", (chain) => {
        //             console.log(chain,'changeChangeddd')
                   
        //         });
        //     }
        // }
        // metaProvider.on("chainChanged", ()=>{}));

        return () => {
            if (metaProvider) {
                metaProvider.off("accountsChanged", accountWasChanged);
                // metaProvider.off("chainChanged", chainChange);
            }
        };
    }, [])

    useEffect(async () => {
        // const web3Provider = web3WithProvider();
        let currentProvider = await getCurrentProvider(window);
        console.log(currentProvider, currentProvider.networkVersion, 'currentProvider')
        // console.log(currentProvider.networkVersion, props.chainId);
        // console.log(currentProvider.networkVersion,'currentProvider.networkVersion')



        // if (Number(currentProvider.networkVersion) !== 250) {
        //     dispatch(switchNetwork(window))
        // } else {
            dispatch(
                checkUSDTBal(window)
            );
            dispatch(
                checkUSDCBal(window)
            )
        // }

        let refreshDelayMs = 1000

        function dhm() {
            // console.count()
            let endDate = new Date(calcTime('utc', '+0', new Date('Sat Feb 02 2023 08:00:00 GMT+0500 (Pakistan Standard Time)'))).getTime()
            // let endDate = new Date(calcTime('utc', '+0', new Date('Sat Jan 31 2023 10:46:00 GMT+0500 (Pakistan Standard Time)'))).getTime()
            let nowDate = new Date(calcTime('utc', '+0', new Date())).getTime()
            let t = endDate - nowDate
            let cd = 24 * 60 * 60 * 1000;
            let ch = 60 * 60 * 1000;
            let cm = 60 * 1000;
            let cs = 1000;
            let d = Math.floor(t / cd);
            let h = Math.floor((t - d * cd) / ch);
            let m = Math.round((t - d * cd - h * ch) / cm);
            let s = Math.round((t - d * cd - h * ch - m * cm) / cs);
            let pad = function (n) { return n < 10 ? '0' + n : n; };
            // if (m === 0) {
            //     h--;
            //     m = 60;
            // }
            // if (h === 0) {
            //     d--;
            //     h = 24;
            // }
            // // if(s < 0)
            // if (s <= 0) {
            //     let passedSec = s
            //     m--;
            //     s = 60 + passedSec
            // }
            if (Number(d) < 0) {
                setDay(0)
            } else {
                if (Number(d) >= 0) setDay(Number(d))

            }
            if (Number(h) < 0) {
                setHours(0)
            } else {

                if (Number(d) >= 0) setHours(Number(h))
            }
            if (Number(m) < 0) {
                setMint(0)
            } else {

                if (Number(d) >= 0) setMint(Number(m))
            }
            if (Number(s) < 0) {
                setSeconds(0)
            } else {
                if (Number(d) >= 0) setSeconds(Number(s))

            }

            setTimeout(dhm, refreshDelayMs)
            // if (Number(d) > 0 &&
            //     Number(h) > 0 &&
            //     Number(m) > 0 &&
            //     Number(s) > 0
            // ) {
            // }
        }

        dhm()

    }, []);



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

    const [open, setOpen] = useState(false);

    function onDismiss() {
        setOpen(false);
        handleCloseSwap()
        handleCloseCard()
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSwap, setShowSwap] = useState(false);

    const handleCloseSwap = () => {
        setShowSwap(false);
        // setOpen(true)
    };
    const handleShowSwap = () => {
        console.log("ShowSwap");
        setShowSwap(true);
    };

    const [showCard, setShowCard] = useState(false);

    const handleCloseCard = () => {
        setShowCard(false);
        // setOpen(true)
    };
    const handleShowCard = () => {
        console.log("ShowCard");
        setShowCard(true);
    };



    return (
        <div className='PreSale'>
            <div className='innerPreSale'>
                {/* {day > 0 || hours > 0 || mint > 0 || seconds > 0 ?
                    <h2><span className='seven'>{day > 0 ? day : hours > 0 ? hours : mint > 0 ? mint : seconds > 0 ? seconds : 0}</span><span className='mediumSpan'> {day > 0 ? `day(s)` : hours > 0 ? `hour(s)` : mint > 0 ? "minute(s)" : seconds > 0 ? `second(s)` : 0} </span> <span className='smallSpan'>to Private Sale</span></h2>
                    : */}
                    <h2><span className='mediumSpan'>Live Now</span> <span className='smallSpan'> Private Sale</span></h2>
                {/* } */}
                <div className='presaleContent' id='presaleContent'>
                    <div className='tokenNomic wow flipInY'>
                        <h3>
                            IT’S TIME TO <br /> UNLOCK BLOCKCHAIN’S FULL POTENTIAL
                        </h3>
                        <div className='points'>
                            <div>1. Discover</div>
                            <div>2. Explore</div>
                            <div>3. Enjoy</div>
                        </div>
                        <p className='overBillion'>
                            Over 1 Billion people using the crypto space. <br />
                            Are you going to be left behind?
                        </p>
                        <a target={"_blank"} className="TOKENOMICSDivAnchor" href="https://agod-ecosystem.gitbook.io/agod-docs/fundamentals/agod-token">
                            <div className='TOKENOMICSDiv'>
                                TOKENOMICS
                            </div>
                        </a>
                    </div>
                    <div className='tokenContribute'>
                        <div className='circleImageDiv'>
                            <div className='circleImage wow fadeIn' data-wow-delay=".2s" >

                                <img className='outer' src='/img/newPage/circleAnimate/outer.png' />
                                <img className='inner' src='/img/newPage/circleAnimate/inner.png' />
                                <img className='load1 wow fadeIn' data-wow-delay=".6s" id='load1' src='/img/newPage/circleAnimate/load1.png' />
                                <img className='load2 wow fadeIn' data-wow-delay="1.3s" id='load2' src='/img/newPage/circleAnimate/load2.png' />
                                <img className='load3 wow fadeIn' data-wow-delay="1.2s" id='load3' src='/img/newPage/circleAnimate/load3.png' />
                                <img className='load4 wow fadeIn' data-wow-delay="1.1s" id='load4' src='/img/newPage/circleAnimate/load4.png' />
                                <img className='load5 wow fadeIn' data-wow-delay="1s" id='load5' src='/img/newPage/circleAnimate/load5.png' />
                                <img className='load6 wow fadeIn' data-wow-delay=".9s" id='load6' src='/img/newPage/circleAnimate/load6.png' />
                                <img className='load7 wow fadeIn' data-wow-delay=".8s" id='load7' src='/img/newPage/circleAnimate/load7.png' />
                                <img className='load8 wow fadeIn' data-wow-delay=".7s" id='load8' src='/img/newPage/circleAnimate/load8.png' />
                                <img className='load9 wow fadeIn' data-wow-delay=".5s" id='load9' src='/img/newPage/circleAnimate/load2.png' />
                            </div>
                        </div>
                        <p className='totalContributes'>Total tokens contributed<br />
                            {numberWithSpace(Number(getTotalTokensSold) + Number(totalTokenSoldCard))} / {numberWithSpace(10000000)} AGOD</p>
                        <div className='tokensAvailable'>
                            {/* <div className='tokensAvailableDiv wow fadeIn' data-wow-delay=".2s">
                                0
                                <br />
                                FTM
                            </div> */}
                            <div className='tokensAvailableDiv wow fadeIn' data-wow-delay=".4s">
                                {getUSDCBalance}
                                <br />
                                USDC
                            </div>
                            <div className='tokensAvailableDiv wow fadeIn' data-wow-delay=".6s">
                                {getUSDTBalance}
                                <br />
                                USDT
                            </div>
                        </div>
                        {/* {launch ? */}
                            <div className='contributeButton wow fadeIn' data-wow-delay=".8s" onClick={() => setOpen(true)}>
                                CONTRIBUTE
                            </div>
                            {/* :
                            <OverlayTrigger
                                key={'top'}
                                placement={'top'}

                                overlay={
                                    <Tooltip id={`tooltip-${'top'}`}>
                                        ( Coming Soon )
                                    </Tooltip>
                                }
                            >
                                <div className='contributeButton wow fadeIn' data-wow-delay=".8s">
                                    CONTRIBUTE
                                </div>
                            </OverlayTrigger>
                        } */}
                    </div>
                </div>
            </div>

            <BottomSheetWallet
                open={open}
                onDismiss={onDismiss}
                show={show}
                setOpen={setOpen}
                setShow={setShow}
                handleClose={handleClose}
                handleShow={handleShow}
                handleShowSwap={handleShowSwap}
                handleCloseSwap={handleCloseSwap}
                handleShowCard={handleShowCard}
                handleCloseCard={handleCloseCard}
                showSwap={showSwap}
                setShowSwap={setShowSwap}
                showCard={showCard}
                ShowCard={setShowCard}
            />
        </div>
    )
}

export default PreSale










