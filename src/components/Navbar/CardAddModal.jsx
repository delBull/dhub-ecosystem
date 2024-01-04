import Cleave from "cleave.js";
import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  createPaymentMethod,
  createUserWithStripe,
  paymentWithCard,
} from "../../store/actions/user/user";
import { creditCardType } from "../../store/Constant";
import {
  countriesList,
  currencies,
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../../utils/Utils";

function CardAddModal({
  show,
  setShow,
  handleClose,
  handleShow,
}) {
  const [custObj, setCustObj] = useState({
    email: "",
    name: "",
    referalID: "",
  });
  const [cardDetail, setCardDetail] = useState({
    number: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
    customerId: "",
  });
  const [paymentObj, setPaymentObj] = useState({
    paymentMethodId: "",
    amount: 1,
    currency: "USD",
    customerId: "",
  });
  const customerLoader = useSelector((e) => e.ContentReducer.customerLoader);
  const paymentLoader = useSelector((e) => e.ContentReducer.paymentLoader);
  const paymentMethodLoader = useSelector(
    (e) => e.ContentReducer.paymentMethodLoader
  );

  const [customer, setCustomer] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [payment, setPayment] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const [thanks, setThanks] = useState(false);

  const createCustomer = (e) => {
    e.preventDefault();
    dispatch(createUserWithStripe(custObj, setCustomer));
  };

  // useEffect(() => {
  //   if(show){
  //     handleCloseCard()
  //   }
  //   console.log(show, "ShowSwap");
  // }, [show]);

  const createPaymentMethodFn = (e) => {
    e.preventDefault();
    let obj = {
      ...cardDetail,
      customerId: customer.id,
    };
    console.log(cardDetail);
    if (country) {
      dispatch(createPaymentMethod(obj, setPaymentMethod));
    } else {
      toast.error(`Required field can't be empty`);
    }
  };

  const createPaymentFn = (e) => {
    // e.preventDefault();
    let obj = {
      ...paymentObj,
      paymentMethodId: paymentMethod.id,
      customerId: customer.id,
      amount: paymentObj.amount * 100,
      totalToken: paymentObj.amount ? paymentObj.amount * 2 : 200,
    };
    console.log(obj);
    dispatch(paymentWithCard(obj, setPayment, clearAllStates, setThanks));
  };

  // useEffect(() => {
  //     // new Cleave('.cardNumber', {
  //     //     creditCard: true,
  //     //     onCreditCardTypeChanged: function (type) {
  //     //         console.log(type,'cardNumber')
  //     //     }
  //     // });
  //     console.log(formatCreditCardNumber(cardNumber),'cardNumber')
  // }, [cardNumber])

  const clearAllStates = (value) => {
    console.log(paymentObj, "PaymentObj");
    setCustObj({
      email: "",
      name: "",
    });
    setCardDetail({
      number: "",
      exp_month: "",
      exp_year: "",
      cvc: "",
      customerId: "",
    });
    if (value) {
      setPaymentObj({
        paymentMethodId: "",
        amount: "",
        currency: "USD",
        customerId: "",
      });
    }
    setCustomer("");
    setPaymentMethod("");
    setPayment("");
    setCardNumber("");
    setExpiryDate("");
    setThanks(false);
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      {/* <Modal
        show={show}
        onHide={() => {
          handleClose();
          // handleShowCard();
          clearAllStates(true);
        }}
        className="getAgodModal cardAddModal"
        backdropClassName="swapModalBackDrop"
      >
        <Modal.Body> */}
          <div className="connectWallet getAgodModal cardAddModal">
            <div className="innerConnectWallet">
              <h3 className="getTokenHeading">CARD PAYMENT</h3>
              <div className="swapForm">
                <div className="swapFormHeading">
                  <h2>
                    $
                    {paymentObj.amount
                      ? numberWithCommas(paymentObj.amount)
                      : 100}{" "}
                    USD{" "}
                    <span>
                      <img className="cardFaviconLogo" src="/img/ficon4.png" />
                    </span>{" "}
                    {paymentObj.amount
                      ? numberWithCommas(paymentObj.amount * 2)
                      : 200}{" "}
                    <span className="cardAgodText">AGOD</span>
                  </h2>
                </div>
                {console.log(paymentObj.amount, "paymentObj.amount")}
                {thanks ? (
                  <>
                    <div className="thankYOuText">
                      <div>
                        <h3>
                          Thank you! You have purchased{" "}
                          {paymentObj.amount
                            ? numberWithCommas(paymentObj.amount * 2)
                            : 0}{" "}
                          AGOD
                          {/*of  $ {paymentObj.amount ? paymentObj.amount : 0}{" "} */}
                        </h3>
                        {/* <p>We have sent you the autogenerated reciept.</p> */}
                        <p>
                          We have emailed you the autogenerated receipt and
                          instructions on how to obtain your AGOD. If you do not
                          receive the confirmation message within a few minutes,
                          please check your spam folder.
                        </p>

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
                ) : paymentMethod ? (
                  <>
                    {/* <form onSubmit={createPaymentFn}> */}

                    <div className="countryFieldBox">
                      <div
                        className="swapFormFieldDiv"
                        style={{ width: "100%" }}
                      >
                        {/* <p className='labelText'></p> */}
                        <label className="swapInput">
                          <span className="requireStar">* AMOUNT</span>{" "}
                          <input
                            value={cardDetail.amount}
                            type={"number"}
                            onChange={(ev) => {
                              let objj = { ...paymentObj };
                              objj.amount = ev.target.value;
                              setPaymentObj(objj);
                            }}
                          />
                        </label>
                      </div>
                      {/* <div className='swapFormFieldDiv'>
                                                <p className='labelText'>COUNTRY</p>
                                                <label className='swapInput'>
                                                    <span className='requireStar'>*</span>
                                                    <select onChange={(ev) => {
                                                        let objj = { ...paymentObj }
                                                        objj.currency = ev.target.value;
                                                        setPaymentObj(objj)
                                                    }}>
                                                        {currencies.map((a, i) => (
                                                            <option>{a}</option>
                                                        ))}
                                                    </select>
                                                </label>
                                            </div> */}
                    </div>
                    <div className="purchaseButtonDiv">
                      <button
                        className="purchaseButton"
                        onClick={() => {
                          createPaymentFn();
                        }}
                      >
                        {paymentLoader ? <div id="loading"></div> : `Purchase`}
                      </button>
                    </div>
                    {/* </form> */}
                  </>
                ) : // customer ?
                customer ? (
                  <>
                    <form onSubmit={createPaymentMethodFn}>
                      <div className="swapFormFieldDiv">
                        {/* <p className='labelText'></p> */}
                        <label className="swapInput">
                          <span className="requireStar">* EMAIL</span>{" "}
                          <input
                            type={"email"}
                            disabled
                            value={custObj.email}
                          />
                        </label>
                      </div>
                      <div className="swapFormFieldDiv">
                        {/* <p className='labelText'></p> */}
                        <label className="swapInput">
                          <span className="requireStar">* FULL NAME</span>{" "}
                          <input type={"text"} disabled value={custObj.name} />
                        </label>
                      </div>
                      <div className="swapFormFieldDiv">
                        {/* <p className='labelText'></p> */}
                        <label className="swapInput cardInput">
                          <span className="requireStar">* CARD NUMBER</span>{" "}
                          <input
                            value={cardNumber}
                            onChange={(ev) => {
                              let objj = { ...cardDetail };

                              setCardNumber(
                                formatCreditCardNumber(ev.target.value)
                                  .cardNumber
                              );
                              objj.number = ev.target.value.replace(/\s+/g, "");
                              setCardDetail(objj);
                            }}
                          />
                          <div className="cards">
                            <img
                              className="cardImage"
                              src="/img/cards/american-express-curved-32px.png"
                            />
                            <img
                              className="cardImage"
                              src="/img/cards/discover-curved-32px.png"
                            />
                            <img
                              className="cardImage"
                              src="/img/cards/mastercard-curved-32px.png"
                            />
                            <img
                              className="cardImage"
                              src="/img/cards/visa-curved-32px.png"
                            />
                          </div>
                        </label>
                      </div>
                      <div className="expriryFieldBox">
                        <div className="swapFormFieldDiv">
                          {/* <p className='labelText'></p> */}
                          <label className="swapInput">
                            <span className="requireStar">* CCV</span>{" "}
                            <input
                              value={cardDetail.cvc}
                              onChange={(ev) => {
                                let objj = { ...cardDetail };
                                objj.cvc = formatCVC(ev.target.value);
                                setCardDetail(objj);
                              }}
                            />
                          </label>
                        </div>
                        <div className="swapFormFieldDiv">
                          {/* <p className='labelText'></p> */}
                          <label className="swapInput">
                            <span className="requireStar">* EXPIRY</span>{" "}
                            <input
                              value={expiryDate}
                              placeholder="mm/yy"
                              onChange={(ev) => {
                                let objj = { ...cardDetail };
                                setExpiryDate(
                                  formatExpirationDate(ev.target.value)
                                );
                                objj.exp_month = Number(
                                  ev.target.value.split("/")[0]
                                );
                                objj.exp_year = Number(
                                  ev.target.value.split("/")[1]
                                );
                                setCardDetail(objj);
                              }}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="countryFieldBox">
                        <div className="swapFormFieldDiv">
                          {/* <p className='labelText'></p> */}
                          <label className="swapInput">
                            <span className="requireStar">* COUNTRY</span>
                            <select
                              required
                              defaultValue={"----"}
                              onChange={(ev) => {
                                // console.log(ev.target.value)
                                setCountry(ev.target.value);
                              }}
                            >
                              <option value="----" disabled>
                                ----
                              </option>
                              {countriesList.map((a, i) => (
                                <option value={a.value}>{a.name}</option>
                              ))}
                            </select>
                          </label>
                        </div>
                        <div className="swapFormFieldDiv">
                          {/* <p className='labelText'></p> */}
                          <label className="swapInput">
                            <span className="requireStar">* ZIP</span>{" "}
                            <input
                              type={"number"}
                              value={cardDetail.zip}
                              onChange={(ev) => {
                                let objj = { ...cardDetail };
                                objj.zip = ev.target.value;
                                setCardDetail(objj);
                              }}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="purchaseButtonDiv">
                        <button
                          className="purchaseButton"
                          onClick={() => {
                            // createPaymentMethodFn()
                          }}
                        >
                          {paymentMethodLoader ? (
                            <div id="loading"></div>
                          ) : (
                            `Add Payment Method`
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <form onSubmit={createCustomer}>
                      <div className="swapFormFieldDiv">
                        {/* <p className='labelText'></p> */}
                        <label className="swapInput">
                          <span className="requireStar">* FULL NAME</span>{" "}
                          <input
                            autoCapitalize="true"
                            autoComplete="false"
                            type={"text"}
                            onChange={(ev) => {
                              let objj = { ...custObj };
                              objj.name = ev.target.value;
                              setCustObj(objj);
                            }}
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
                              objj.email = ev.target.value;
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
                          {customerLoader ? (
                            <div id="loading"></div>
                          ) : (
                            `CONTINUE`
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        {/* </Modal.Body>
      </Modal> */}
    </>
  );
}

export default CardAddModal;
