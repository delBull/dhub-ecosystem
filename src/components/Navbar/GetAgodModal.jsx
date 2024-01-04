import React, { useState } from "react";
import { useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DisconnectMetaMask } from "../../store/actions/user/user";
import { addContent, shortAddress } from "../../store/Constant";

function AgodModal({
  show,
  setShow,
  handleClose,
  handleShow,
  handleShowSwap,
  handleShowCard,
  handleCloseSwap,
  handleCloseCard,
}) {
  const content = useSelector((e) => e.ContentReducer.content);
  const [infoToggle, setInfoToggle] = useState(false);
  const address = useSelector((e) => e.ContentReducer.metaMaskAccount);
  useEffect(() => console.log(address, "address"), [address]);
  const dispatch = useDispatch();
  return (
    <>
      <Modal show={show} onHide={handleClose} className="getAgodModal">
        <Modal.Body>
          <div className="connectWallet">
            <div className="leftPart">
              <div className="wallerDiv">
                <h3 className="methodName">Connect a Wallet</h3>
                <div className="walletDivConnect">
                  <div
                    className="innerWallerDiv cursor-pointer"
                    onClick={() => {
                      if (!window?.ethereum?.isMetaMask) {
                        window.open("https://metamask.io/", "_blank");
                      } else {
                        handleShowSwap();
                        setShow(false);
                      }
                    }}
                  >
                    <div className="walletIconDiv">
                      <img className="walletIcon" src="/img/metamask.webp" />
                    </div>
                    <div>
                      <p className="walletName">
                        MetaMask
                        {/* <sub>(Coming Soon)</sub> */}
                      </p>
                      {address ? (
                        <p className="connectedAWalletAddress">
                          Connected: <b>({shortAddress(address)})</b>{" "}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {address ? (
                    <button
                      className=" discoonnectButton cursor-pointer"
                      onClick={() => {
                        dispatch(
                          DisconnectMetaMask(handleCloseSwap, handleCloseCard)
                        );
                      }}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-power"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.5 1v7h1V1h-1z" />
                          <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                        </svg>
                      </span>
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="wallerDiv">
                <h3 className="methodName">Pay by card</h3>
                <div
                  className="innerWallerDiv cursor-pointer"
                  onClick={() => {
                    handleShowCard();
                    setShow(false);
                  }}
                >
                  <div className="walletIconDiv">
                    <img className="walletIcon" src="/img/cardImage.png" />
                  </div>
                  <div>
                    <p className="walletName">
                      Credit Card
                      {/* <sub>(Coming Soon)</sub> */}
                    </p>
                    <p className="walletName">
                      Debit Card
                      {/* <sub>(Coming Soon)</sub> */}
                    </p>
                  </div>
                </div>
              </div>
              <h3
                className="getWallet"
                onClick={() => {
                  handleShowSwap();
                  setShow(false);
                }}
              >
                Get a Wallet
                {/* <sub>(Coming Soon)</sub> */}
              </h3>
            </div>
            <div className="separatorModal"></div>
            <div className="rightPart">
              <div className="rightPartText">
                {infoToggle ? (
                  <>
                    <h3 className="rightParth3">
                      {content.getAgodModelHeading}
                    </h3>
                    <p>{content.getAgodModelPara1}</p>
                    <p>{content.getAgodModelPara2}</p>
                    <p>{content.getAgodModelPara3}</p>
                  </>
                ) : (
                  <>
                    <h3 className="rightParth3">
                      A Home for your Digital Assets
                    </h3>
                    <p>
                      Wallets are used to send, receive, store, and display
                      digital assets like Ethereum and NFTs.
                    </p>
                    <h3 className="rightParth3">A New Way to Log In</h3>
                    <p>
                      Instead of creating new accounts and passwords on every
                      website, just connect your wallet.
                    </p>
                  </>
                )}
              </div>

              <button
                className="infoButtonAgodModal"
                onClick={() => setInfoToggle(!infoToggle)}
              >
                <AiOutlineInfoCircle /> Info
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AgodModal;
