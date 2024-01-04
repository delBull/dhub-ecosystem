import React, { useState } from "react";
import { useEffect } from "react";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  balanceOfFn,
  buyAgod,
  connnectMetamaskUser,
  createUserWithStripe,
  getCurrentProvider,
  getUser,
  GetUserWithMetaMaskID,
  importToken,
} from "../../store/actions/user/user";
import { copyFunction, shortAddress } from "../../store/Constant";

function SwapModal({ show, setShow, handleClose, handleShow, open }) {
  const [account, setAccount] = useState("");
  const dispatch = useDispatch();
  const address = useSelector((e) => e.ContentReducer.metaMaskAccount);
  const balanceOf = useSelector((e) => e.ContentReducer.balanceOf);
  const [youPay, setYouPay] = useState();
  const [youGet, setYouGet] = useState();
  const [price, setPrice] = useState(2);
  const [referAddress, setReferAddress] = useState(
    "0x0000000000000000000000000000000000000000"
  );
  const [selectedToken, setSelectedToken] = useState("USDC");
  // const [selectedToken, setSelectedToken] = useState("USDT")
  const balance = useSelector((e) => e.ContentReducer.balance);
  const investAmount = useSelector((e) => e.ContentReducer.investAmount);
  const buyAgodLoader = useSelector((e) => e.ContentReducer.buyAgodLoader);
  const getUserLoader = useSelector((e) => e.ContentReducer.getUserLoader);

  const [addData, setAddData] = useState(false);
  const [referalAddress, setReferalAddress] = useState(false);
  const calcYouGet = (am) => {
    console.log(am)
    setYouPay(am);
    setYouGet(am * price);
  };

  const calcYouPay = (am) => {
    setYouGet(am);
    setYouPay(am / price);
  };

  const clearState = () => {
    setYouGet("");
    setYouPay("");
  };

  useEffect(() => {
    const refUrl = new URL(window.location);
    const refId = refUrl.searchParams.get("referId");
    setReferalAddress(refId);
  }, []);

  async function getAccount() {
    console.log(selectedToken, "selectedToken");
    dispatch(
      connnectMetamaskUser(
        handleClose,
        selectedToken === "USDC"
          ? false
          : selectedToken === "USDT"
            ? true
            : null,
        setAddData,
        window
      )
    );
  }


  useEffect(()=>{
    console.log(addData,'setAddData')
  },[addData])




  // async function getMetaMaskUser() {
  //     dispatch(GetUserWithMetaMaskID())
  // }

  useEffect(() => {
    console.log(show,'showshow')
    if (open) {
      // console.log(address, "address");
      // if (!address) {
        getAccount();
      // }
    }
  }, [open]);

  const [thanks, setThanks] = useState(false);

  const purchased = () => {
    if (youPay < 10) {
      toast.error("Amount should be at least 10");
    } else {
      let amount = youPay * 1e6;
      // console.log(amount)
      const peggedBool =
        selectedToken === "USDC"
          ? false
          : selectedToken === "USDT"
            ? true
            : null;
      if (amount) {
        if (referalAddress) {
          dispatch(
            buyAgod(
              amount,
              referalAddress,
              peggedBool,
              clearState,
              selectedToken,
              setThanks,
              youGet,
              window
            )
          );
        } else {
          dispatch(
            buyAgod(
              amount,
              referAddress,
              peggedBool,
              clearState,
              selectedToken,
              setThanks,
              youGet,
              window
            )
          );
        }
      } else {
        toast.error("Please enter a valid amount");
      }
    }
  };
  const [shortAddressState, setShortAddressState] = useState();

  const [custObj, setCustObj] = useState({
    userID: "",
    referalID: null,
    stripeID: null,
    metamaskID: "",
  });

  const createCustomer = (e) => {
    e.preventDefault();
    let obj = {
      ...custObj,
      metamaskID: address,
    };
    dispatch(getUser(obj, setAddData));
  };

  useEffect(() => {
    if (address) {
      setShortAddressState(shortAddress(address));
    }
  }, [address]);

  useEffect(() => {
    if (address) {
      dispatch(
        balanceOfFn(
          selectedToken === "USDC"
            ? false
            : selectedToken === "USDT"
              ? true
              : null,
          window
        )
      );
    }
  }, [selectedToken, address]);

  const clearAllStates = (value) => {
    setCustObj({
      userID: "",
      referalID: null,
      stripeID: null,
      metamaskID: "",
    });
    setYouGet(0);
    setYouPay(0);
    setThanks(false);
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      {/* <Modal
        show={show}
        onHide={handleClose}
        className="getAgodModal swapModal"
        backdropClassName="swapModalBackDrop"
      >
        <Modal.Body> */}
      <div className="getAgodModal swapModal">
        <div className="connectWallet">
          <div className="innerConnectWallet">
            <h3 className="getTokenHeading">GET TOKEN</h3>
            <div className="swapForm">
              {thanks ? (
                <>
                  <div className="thankYOuText">
                    <div>
                      <h3>
                        {/* Thank you! You have purchased {youGet} AGOD  */}
                        {/* <br /> */}
                        {/* of ${" "}{youPay}{" "} */}
                      </h3>
                      <h6 className="token-Congratulations">
                        <strong>Congratulations! </strong> Your Purchase Is
                        Successful
                        <br />
                        You have successfully become an AGOD’er by purchasing
                        <strong> AGOD</strong> Token.
                        <br />
                        <strong>HODL</strong> and get ready to start earning
                        with the ecosystem’s growth.
                        <br />
                      </h6>
                      <h6 className="token-Congratulations txt-right">
                        Thank you! You Successfully Purchased{" "} <br />
                        {numberWithCommas(youGet)} AGOD
                      </h6>

                      {/* <p>We have sent you the autogenerated reciept.</p> */}

                      <div className="purchaseButtonDiv">
                        <button
                          className="purchaseButton"
                          onClick={() => {
                            handleClose();
                            clearAllStates(true);
                          }}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : addData ? (
                <form onSubmit={createCustomer}>
                  <div className="swapFormFieldDiv">
                    {/* <p className='labelText'></p> */}
                    <label className="swapInput">
                      <span className="requireStar">* FULL NAME</span>{" "}
                      <input
                        autoCapitalize="true"
                        autoComplete="false"
                        type={"text"}
                      // onChange={(ev) => {
                      //     let objj = { ...custObj }
                      //     objj.name = ev.target.value
                      //     setCustObj(objj)
                      // }}
                      />
                    </label>
                  </div>
                  <div className="swapFormFieldDiv">
                    {/* <p className='labelText'></p> */}
                    <label className="swapInput">
                      <span className="requireStar">* EMAIL</span>{" "}
                      <input
                        autoCapitalize="true"
                        autoComplete="false"
                        type={"email"}
                        onChange={(ev) => {
                          let objj = { ...custObj };
                          objj.userID = ev.target.value;
                          setCustObj(objj);
                        }}
                      />
                    </label>
                  </div>
                  <div className="purchaseButtonDiv">
                    <button
                      className="purchaseButton"
                      onClick={() => {
                        // createCustomer();
                      }}
                    >
                      {getUserLoader ? <div id="loading"></div> : `CONTINUE`}
                    </button>
                  </div>
                </form>
              ) : address ? (
                <>
                  <div className="swapFormHeadingDiv">
                    <div className="swapFormHeading selectAssetIcons">
                      <h5>SELECT ANY ASSET</h5>
                      <div>
                        <img className="ficonLogo" src="/img/usdc.png" />
                        <img className="ficonLogo" src="/img/usdt.png" />
                      </div>
                    </div>
                    <div className="swapFormHeading">
                      <h5>SWAP FOR AGOD</h5>
                      <img className="ficonLogo" src="/img/ficon4.png" />
                    </div>
                  </div>
                  <div className="swapFormFieldDiv">
                    <p className="labelText">
                      YOU PAY{" "}
                      <span>
                        Balance:{" "}
                        {balanceOf
                          ? parseFloat(Number(balanceOf).toFixed(5))
                          : 0}
                      </span>
                    </p>
                    <label className="swapInput">
                      <input
                        type="number"
                        value={youPay}
                        placeholder="0"
                        onChange={(ev) => {
                          {
                            /* value={parseFloat(Number(youPay).toFixed(5))} */
                          }
                          calcYouGet(ev.target.value);
                        }}
                        disabled={buyAgodLoader}
                      />

                      <div className="svgDiv">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <p>
                              {selectedToken ? selectedToken : `SELECT TOKEN`}
                            </p>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                              ></path>
                            </svg>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <div
                                className="tokenSelect"
                                onClick={() => {
                                  setSelectedToken("USDC");
                                }}
                              >
                                <img
                                  className="ficonLogo"
                                  src="/img/usdc.png"
                                />
                                USDC
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <div
                                className="tokenSelect"
                                onClick={() => {
                                  setSelectedToken("USDT");
                                }}
                              >
                                <img
                                  className="ficonLogo"
                                  src="/img/usdt.png"
                                />
                                USDT
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <p
                          className="maxText cursor-pointer"
                          onClick={() => {
                            calcYouGet(Number(balanceOf));
                          }}
                        >
                          MAX
                        </p>
                      </div>
                    </label>
                    <p style={{ fontSize: 10, marginLeft: 10 }}>
                      You should have at least 10 USDC/USDT
                    </p>
                  </div>

                  <div className="swapFormFieldDiv">
                    <p className="labelText">
                      YOU GET <span>Balance: {investAmount}</span>
                    </p>
                    <label className="swapInput">
                      <input
                        type="number"
                        placeholder="0"
                        value={youGet}
                        onChange={(ev) => {
                          calcYouPay(ev.target.value);
                        }}
                        disabled={buyAgodLoader}
                      />
                      <OverlayTrigger
                        key={"top"}
                        placement={"top"}
                        overlay={<Tooltip>Add AGOD to your metamask</Tooltip>}
                      >
                        <p className="agodTextSwap">
                          Agod{" "}
                          <button
                            className="addAgodToken"
                            onClick={() => {
                              dispatch(importToken());
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                          </button>
                        </p>
                      </OverlayTrigger>
                    </label>
                  </div>
                  <div className="ratesAmount">
                    <p>EXCHANGE RATE</p>
                    <p>
                      <b>0.5</b>
                    </p>
                  </div>
                  <div className="ratesAmount">
                    <p>
                      REFERRAL{" "}
                      {referalAddress ? (
                        <span className="walletAddress">
                          ({referalAddress})
                        </span>
                      ) : null}
                    </p>
                    <p>
                      <b>upto 10%</b>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                    </p>
                  </div>
                  <div className="purchaseButtonDiv">
                    <button
                      className="purchaseButton"
                      onClick={purchased}
                      disabled={buyAgodLoader}
                    >
                      {buyAgodLoader ? <div id="loading"></div> : `PURCHASE`}
                    </button>
                    {investAmount >= 100 ? (
                      <p
                        className="cursor-pointer"
                        style={{ color: "green" }}
                        onClick={() => {
                          copyFunction();
                        }}
                      >
                        {" "}
                        Your Refer Link
                      </p>
                    ) : (
                      <p
                        className="cursor-pointer"
                        style={{ color: "red" }}
                        onClick={() => {
                          // copyFunction()
                        }}
                      >
                        {" "}
                        You can not generate referal link, you should have at
                        least 100 AGOD{" "}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h2>Connecting your MetaMask</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* </Modal.Body> */}
      {/* </Modal> */}
    </>
  );
}

export default SwapModal;
