import axios from "axios";
import Web3 from "web3";

import { ToastContainer, toast, collapseToast } from 'react-toastify';
import AGOD_ABI from "../../../web3/abi";
import { AGOD_CONTRACT_ADDRESS, USDC_CONTRACT_ADDRESS, USDT_CONTRACT_ADDRESS } from "../../../web3/address";
import USDC_ABI from "../../../web3/usdcAbi";
import USDT_ABI from "../../../web3/usdtAbi";

// get matamask

export const CONNECT_METAMASK_LOADER = "CONNECT_METAMASK_LOADER";
export const connectMetamaskLoader = (bool) => ({
    type: 'CONNECT_METAMASK_LOADER',
    payload: bool,
});


export const GET_USER_LOADER = "GET_USER_LOADER";
export const getUserLoader = (bool) => ({
    type: 'GET_USER_LOADER',
    payload: bool,
});

export const getUser = (obj, setCustomer) => {
    return async (dispatch) => {
        dispatch(getUserLoader(true))
        try {
            toast.success("Metamask has been connected")
            var axios = require('axios');
            var data = JSON.stringify(obj);

            var config = {
                method: 'post',
                url: '/createUser',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data, 'response.data');
                    setCustomer(false)
                    dispatch(getUserLoader(false))
                    dispatch(getMetamaskUser())
                    // dispatch(metamaskUser(obj.metamaskID))

                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch {
            dispatch(getUserLoader(false))
            handleClose()
        }
    };
};

export const GetUserWithMetaMaskID = (account, setAddData) => {
    return async (dispatch) => {
        dispatch(connectMetamaskLoader(true))
        try {
            toast.success("Metamask has been connected")
            var axios = require('axios');
            var data = JSON.stringify({
                "metamaskID": account
            });

            var config = {
                method: 'post',
                url: '/GetDataWithMetaMaskID',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data, 'response.data');
                    if (response.data.length) {
                        dispatch(getMetamaskUser())
                        // dispatch(metamaskUser(account))
                    } else {
                        dispatch(getMetamaskUser())
                        setAddData(true)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch {
            handleClose()
        }
    };
};



export const connnectMetamaskUser = (handleClose, selectedToken, setAddData, window) => {
    return async (dispatch) => {
        dispatch(connectMetamaskLoader(true))
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            localStorage.setItem("AgodTokenId", accounts[0])
            localStorage.setItem("connectionType", 'metamask')


            let currentProvider = await getCurrentProvider(window);
            console.log(currentProvider, currentProvider.networkVersion, 'currentProvider')
            // console.log(currentProvider.networkVersion, props.chainId);
            // console.log(currentProvider.networkVersion,'currentProvider.networkVersion')

            // if (Number(currentProvider.networkVersion) !== 250) {
            //     dispatch(switchNetwork(window))
            // }

            dispatch(GetUserWithMetaMaskID(accounts[0], setAddData))


            // toast.success("Metamask have been connected")
            // dispatch(getMetamaskUser())
            // dispatch(balanceMetamaskUser())
            // dispatch(balanceOfFn(selectedToken))
            // dispatch(metamaskUser(accounts[0]))

        } catch {
            handleClose()
            // toast.error("Please Try Again!")
        }
    };
};


// get matamask

export const BALANCE_METAMASK_LOADER = "BALANCE_METAMASK_LOADER";
export const balanceMetamaskLoader = (bool) => ({
    type: 'BALANCE_METAMASK_LOADER',
    payload: bool,
});


export const balanceMetamaskUser = (window) => {
    return async (dispatch) => {
        let account = localStorage.getItem("AgodTokenId")
        if (account) {
            dispatch(balanceMetamaskLoader(true))
            console.log('balance')
            // if (localStorage.getItem())

            try {
                const web3 = new Web3(await getCurrentProvider(window));
                let balance = 0
                web3.eth.getBalance(account).then((res) => {
                    const etherValue = Web3.utils.fromWei(String(res), 'ether')
                    console.log(etherValue, 'etherValue')
                    dispatch(balanceMetamask(etherValue))
                });
                if (balance) {
                    console.log(balance, 'balance')
                    dispatch(balanceMetamaskLoader(false))
                }
            } catch {
                dispatch(balanceMetamaskLoader(false))
                // this we have tio chekc it was commint in reponsive========
                toast.error("Please Try Again!")
            }
        }
    };
};


export const BALANCE_METAMASK = "BALANCE_METAMASK";
export const balanceMetamask = (bool) => ({
    type: 'BALANCE_METAMASK',
    payload: bool,
});


export const getMetamaskUser = () => {
    return async (dispatch) => {
        let AgodTokenId = localStorage.getItem("AgodTokenId")
        let connectionType = localStorage.getItem("connectionType")
        dispatch(connectMetaMaskData({ AgodTokenId, connectionType }))
    };
};

//Set User Profile
export const GET_META_MASK_DATA = "GET_META_MASK_DATA";
export const connectMetaMaskData = (payload) => ({
    type: GET_META_MASK_DATA,
    payload: payload,
});



export const METAMASK_LOADER = "METAMASK_LOADER";
export const metamaskLoader = (bool) => ({
    type: 'METAMASK_LOADER',
    payload: bool,
});


export const metamaskUser = (account) => {
    return async (dispatch) => {
        dispatch(metamaskLoader(true))
        var axios = require('axios');
        var data = JSON.stringify({
            "userID": account,
            "referalID": "djkhaskjdhkjashdkjashdkjhskjd"
        });

        var config = {
            method: 'post',
            url: '/createUser',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                dispatch(metamaskLoader(false))
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                dispatch(metamaskLoader(false))
                console.log(error);
            });

    };
};

//Set User Profile
export const META_MASK_DATA = "META_MASK_DATA";
export const getContent = (payload) => ({
    type: META_MASK_DATA,
    payload: payload,
});


export const CREATE_CUSTOMER_LOADER = "CREATE_CUSTOMER_LOADER";
export const createUserWithStripeLoader = (bool) => ({
    type: 'CREATE_CUSTOMER_LOADER',
    payload: bool,
});


export const createUserWithStripe = (obj, setCustomer) => {
    return async (dispatch) => {
        dispatch(createUserWithStripeLoader(true))
        var axios = require('axios');
        var data = JSON.stringify(obj);

        var config = {
            method: 'post',
            url: '/createUserWithStripe',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                dispatch(createUserWithStripeLoader(false))
                console.log(response.data);
                setCustomer(response.data.data ? response.data.data : {
                    ...response.data[0],
                    id: response.data[0].stripeID
                });
            })
            .catch(function (error) {
                dispatch(createUserWithStripeLoader(false))
                toast.error(error.response.data)
            });

    };
};



export const CREATE_PAYMENT_METHOD = "CREATE_PAYMENT_METHOD";
export const createPaymentMethodLoader = (bool) => ({
    type: 'CREATE_PAYMENT_METHOD',
    payload: bool,
});


export const createPaymentMethod = (obj, setPaymentMethod) => {
    return async (dispatch) => {
        dispatch(createPaymentMethodLoader(true))
        var axios = require('axios');
        var data = JSON.stringify(obj);

        var config = {
            method: 'post',
            url: '/createPaymentMethod',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                dispatch(createPaymentMethodLoader(false))
                setPaymentMethod(response.data.data);
                toast.success("You card has been added succesfully")
            })
            .catch(function (error) {
                dispatch(createPaymentMethodLoader(false))
                console.log(error);
                toast.error(error.response.data)
            });

    };
};

export const CREATE_PAYMENT = "CREATE_PAYMENT";
export const createPaymentLoader = (bool) => ({
    type: 'CREATE_PAYMENT',
    payload: bool,
});


export const paymentWithCard = (obj, setPayment, clearAllStates, setThanks) => {
    return async (dispatch) => {
        dispatch(createPaymentLoader(true))
        var axios = require('axios');
        var data = JSON.stringify(obj);

        var config = {
            method: 'post',
            url: '/paymentWithCard',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                dispatch(createPaymentLoader(false))
                setPayment(response.data.data);
                toast.success("Payment Success")
                clearAllStates()
                setThanks(true)
            })
            .catch(function (error) {
                dispatch(createPaymentLoader(false))
                console.log(error);
                toast.error(error.response.data)
                setThanks(false)
            });

    };
};

export const web3WithProvider = async (window) => {
    const walletType = localStorage.getItem("walletType");
    if (walletType === "metaMask") {
        console.log("setting metaMask provider");
        let provider;
        // const metaMaskProvider = await detectEthereumProvider();
        if (window.ethereum.isMetaMask) {
            provider = window.ethereum;
        }
        window?.ethereum?.providers?.forEach(async (p) => {
            if (p.isMetaMask) {
                provider = p;
            }
        });
        return new Web3(provider);
    }
}

export const getCurrentProvider = (window) => {
    let provider;
    // console.log(window)
    if (window?.ethereum) {
        if (window?.ethereum.isMetaMask) {
            provider = window?.ethereum;
        }
    }
    if (window?.ethereum) {
        if (window?.ethereum.providers) {

            window?.ethereum.providers.forEach(async (p) => {
                if (p.isMetaMask) {
                    provider = p;
                }
            });
        }
    }
    return provider;

};
const checkTokenBal = async (tokenname, window) => {
    // return async  () => {
    const web3 = new Web3(await getCurrentProvider(window));
    let address = localStorage.getItem("AgodTokenId")

    if (tokenname === "usdc") {

        const usdc = new web3.eth.Contract(USDC_ABI, USDC_CONTRACT_ADDRESS);
        let balanceOfusdc = await usdc.methods.balanceOf(address).call()
        // toast.error( "balanceOfusdc", balanceOfusdc)
        return balanceOfusdc
    } else {
        const usdt = new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS);
        let balanceOfusdt = await usdt.methods.balanceOf(address).call()
        // toast.error("balanceOfusdt"+ balanceOfusdt)
        return balanceOfusdt

    }

    // }

}


export const checkUSDTBal = (window) => {
    return async dispatch => {
        console.log('checkUSDTBal')
        try {

            if (window.ethereum) {

                const web3 = new Web3(await getCurrentProvider(window));
                let address = localStorage.getItem("AgodTokenId")
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

                const usdt = new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS);
                let balanceOfusdt = await usdt.methods.balanceOf(AGOD_CONTRACT_ADDRESS).call()
                // toast.error("balanceOfusdt"+ balanceOfusdt)
                console.log(balanceOfusdt, 'balanceOfusdt')
                if (balanceOfusdt) {
                    console.log(balanceOfusdt, 'balanceOfusdt')
                    dispatch(checkUSDTbalanceData(balanceOfusdt / 1e6))
                }
            }



        } catch (err) {
            console.log(err, 'err.response')
        }
    }

}
export const CHECK_USDT_BALANCE = "CHECK_USDT_BALANCE";
export const checkUSDTbalanceData = (tokens) => {
    console.log(tokens)
    return ({
        type: 'CHECK_USDT_BALANCE',
        payload: tokens,
    })
};



export const checkUSDCBal = (window) => {
    return async dispatch => {
        try {

            if (window.ethereum) {

                const web3 = new Web3(await getCurrentProvider(window));
                let address = localStorage.getItem("AgodTokenId")
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });



                const usdc = new web3.eth.Contract(USDC_ABI, USDC_CONTRACT_ADDRESS);
                let balanceOfusdc = await usdc.methods.balanceOf(AGOD_CONTRACT_ADDRESS).call()
                // toast.error( "balanceOfusdc", balanceOfusdc)
                if (balanceOfusdc) {
                    console.log(balanceOfusdc, 'balanceOfusdc')
                    dispatch(checkUSDCbalanceData(balanceOfusdc / 1e6))
                }


            }
        } catch (err) {
            console.log(err.response, 'err.response')

        }
    }

}

export const CHECK_USDC_BALANCE = "CHECK_USDC_BALANCE";
export const checkUSDCbalanceData = (tokens) => {
    console.log(tokens)
    return ({
        type: 'CHECK_USDC_BALANCE',
        payload: tokens,
    })
};


// Get NFTs On Sell",
export const balanceOfFn = (currency, window) => {
    return async (dispatch) => {
        try {

            const web3 = new Web3(await getCurrentProvider(window));
            let address = localStorage.getItem("AgodTokenId")
            // toast.error("err.message1"+address)
            const agod = new web3.eth.Contract(AGOD_ABI, AGOD_CONTRACT_ADDRESS);
            const usdc = new web3.eth.Contract(USDC_ABI, USDC_CONTRACT_ADDRESS);
            const usdt = new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS);
            // toast.error("err.message2")


            let balanceOf;
            if (currency) {
                // balanceOf = await usdt.methods.balanceOf(address).call()
                // let balanceOfusdt
                try {
                    balanceOf = await checkTokenBal("usdt", window)

                } catch (error) {
                    console.log(error)
                }
                // toast.error("err.message3 + balanceOfusdt" + balanceOf)
            } else {

                // let balanceOfusdc = await usdc.methods.balanceOf(address).call()
                // let balanceOfusdc
                try {
                    balanceOf = await checkTokenBal("usdc", window)

                } catch (error) {
                    console.log(error)
                }
                // toast.error("err.message4 + balanceOfusdc" + balanceOf)

                // toast.error("err.message4.5"+ typeof(balanceOfusdc))
                // toast.error("err.message4.5"+ balanceOfusdc)

            }
            console.log(balanceOf, 'balanceOf')

            if (balanceOf) {
                // toast.error("err.message5")

                dispatch(balanceOfData(balanceOf / 1e6))

            }
        } catch (err) {
            console.log(err)
            toast.error(err.message)

        }

    };
};


export const BALANCE_OF_DATA = "BALANCE_OF_DATA";
export const balanceOfData = (bool) => ({
    type: 'BALANCE_OF_DATA',
    payload: bool,
});

export const BUY_AGOD_LOADER = "BUY_AGOD_LOADER";
export const buyAgodLoader = (bool) => ({
    type: 'BUY_AGOD_LOADER',
    payload: bool,
});

// Get NFTs On Sell",
export const buyAgod = (amount, referAddress, peggedBool, clearState, selectedToken, setThanks, agodAmount, window) => {
    return async (dispatch) => {
        console.log(amount, referAddress, peggedBool, clearState + "amount, referAddress, peggedBool, clearState,")
        dispatch(buyAgodLoader(true))
        let address = localStorage.getItem("AgodTokenId")
        try {

            const web3 = new Web3(await getCurrentProvider(window));
            const agod = new web3.eth.Contract(AGOD_ABI, AGOD_CONTRACT_ADDRESS);
            const usdc = new web3.eth.Contract(USDC_ABI, USDC_CONTRACT_ADDRESS);
            const usdt = new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS);
            let userAllowance
            let increaseAllowance;
            if (peggedBool) {
                userAllowance = await usdt.methods.allowance(address, AGOD_CONTRACT_ADDRESS).call()
            } else {
                userAllowance = await usdc.methods.allowance(address, AGOD_CONTRACT_ADDRESS).call()
            }
            console.log(userAllowance, 'userAllowance')

            if (Number(userAllowance) - (amount) <= 0) {
                console.log(userAllowance, 'userAllowance')
                if (peggedBool) {
                    increaseAllowance = await usdt.methods.approve(AGOD_CONTRACT_ADDRESS, amount * 10).send({ from: address })
                } else {
                    increaseAllowance = await usdc.methods.approve(AGOD_CONTRACT_ADDRESS, amount * 10).send({ from: address })
                }
            } else {
                console.log(userAllowance, 'userAllowance')
            }


            console.log(increaseAllowance, 'increaseAllowance')

            if (increaseAllowance || userAllowance != 0) {

                const buy = await agod.methods.buy(amount, referAddress, peggedBool).send({ from: address })
                // const buy = agod.methods/
                console.log(buy, "buy")

                if (buy) {
                    toast.success('You have succesfully purchased AGOD TOKEN')
                    dispatch(investmentRecordsFn(window))
                    // dispatch(balanceMetamaskUser())
                    // dispatch(balanceOfFn(peggedBool))
                    dispatch(SendEmailAPT({
                        metamaskID: address,
                        totalToken: agodAmount
                    }))
                    dispatch(totalTokenSold(window))
                    dispatch(
                        checkUSDTBal(window)
                    );
                    dispatch(
                        checkUSDCBal(window)
                    )
                    setThanks(true)
                    dispatch(buyAgodLoader(false))
                    // clearState()
                }
            }
        } catch (err) {
            console.log(err.message)
            toast.error(err.message)
            dispatch(buyAgodLoader(false))
            // dispatch(balanceMetamaskUser())
            // dispatch(balanceOfFn(address))

        }

    };
};


// Get NFTs On Sell",
export const investmentRecordsFn = (window) => {
    return async (dispatch) => {
        let address = localStorage.getItem("AgodTokenId")
        if (address) {
            try {
                console.log(address, 'address')
                const web3 = new Web3(await getCurrentProvider(window));

                const agod = new web3.eth.Contract(AGOD_ABI, AGOD_CONTRACT_ADDRESS);

                let investmentRecords;
                try {
                    // balanceOf = await checkTokenBal("usdt")
                    investmentRecords = await agod.methods.investmentRecords(address).call()
                    // toast.error(investmentRecords, 'investmentRecords')
                    console.log(investmentRecords, 'investmentRecords')

                } catch (error) {
                    console.log(error)
                }
                // const investmentRecords = agod.methods/
                if (investmentRecords) {
                    const etherValue = Web3.utils.fromWei(String(investmentRecords.quantity), 'ether')
                    dispatch(inverstmentRacordAmount(etherValue))

                    // toast.success('You have succesfully purchased AGOD TOKEN')
                }
            } catch (err) {
                toast.error(err.message)

            }
        }

    };
};

export const INVESTMENT_AMOUNT = "INVESTMENT_AMOUNT";
export const inverstmentRacordAmount = (bool) => ({
    type: 'INVESTMENT_AMOUNT',
    payload: bool,
});


// refer,
export const referalEarningsFn = (refAddress, window) => {
    return async (dispatch) => {
        console.log(refAddress, 'refAddress')
        let address = localStorage.getItem("AgodTokenId")
        if (address) {
            try {

                const web3 = new Web3(await getCurrentProvider(window));


                const agod = new web3.eth.Contract(AGOD_ABI, AGOD_CONTRACT_ADDRESS);
                let referalEarnings;
                try {
                    // balanceOf = await checkTokenBal("usdt")
                    referalEarnings = await agod.methods.referalEarnings(address).call()
                    console.log("referalEarnings", referalEarnings)

                } catch (error) {
                    console.log(error)
                }
                // const referalEarnings = agod.methods/
                if (referalEarnings) {
                    console.log(referalEarnings, 'referalEarnings')

                    // toast.success('You have succesfully purchased AGOD TOKEN')
                }
            } catch (err) {
                // console.log(err)
                toast.error(err.message)
                // toast.error('referalEarningsFn failed')

            }
        }

    };
};



export const DisconnectMetaMask = (handleCloseSwap,
    handleCloseCard) => {
    return async (dispatch) => {
        localStorage.removeItem("AgodTokenId")
        localStorage.removeItem("connectionType")
        toast.success("Metamask has been disconnected")
        handleCloseSwap()
        handleCloseCard()
        dispatch(getMetamaskUser())

    };
}




export const importToken = () => {
    return async (dispatch) => {
        const tokenAddress = '0xcd20752314f975007032Fd8675010811dDF9e15B';
        const tokenSymbol = 'AGOD';
        const tokenDecimals = 18;
        const tokenImage = '';

        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20', // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals, // The number of decimals in the token
                    },
                },
            });

            if (wasAdded) {
                toast.success('AGOD Token has been added.');
                // console.log('Thanks for your interest!');
            } else {
                toast.error('Your loss!');
            }
        } catch (error) {
            toast.error(error.message);
        }

    };
}


export const SendEmailAPT = (obj, setCustomer) => {
    return async (dispatch) => {
        // dispatch(createUserWithStripeLoader(true))
        var axios = require('axios');
        var data = JSON.stringify(obj);

        var config = {
            method: 'post',
            url: '/SendEmailAPT',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {

            })
            .catch(function (error) {
            });

    };
};

// //Set User Profile
// export const GET_ = "GET_";
// export const getContent = (payload) => ({
//     type: GET_,
//     payload: payload,
// });




// Get NFTs On Sell",
export const totalTokenSold = (window) => {
    return async (dispatch) => {
        console.log('totalTokenSold caleed')
        let address = localStorage.getItem("AgodTokenId")
        // if (address) {
        try {
            // console.log(address, 'address')
            const web3 = new Web3(await getCurrentProvider(window));

            const agod = new web3.eth.Contract(AGOD_ABI, AGOD_CONTRACT_ADDRESS);

            let tokensSold;
            try {
                // balanceOf = await checkTokenBal("usdt")
                tokensSold = await agod.methods.tokensSold().call()
                // toast.error(tokensSold, 'tokensSold')
                // console.log(Web3.utils.fromWei(String(tokensSold), 'ether'), 'tokensSold')

            } catch (error) {
                console.log(error)
            }
            // const tokensSold = agod.methods/
            console.log(tokensSold, 'tokensSold')
            if (tokensSold) {
                dispatch(totalTokenSoldData(Web3.utils.fromWei(String(tokensSold), 'ether')))
                // console.log(tokensSold,'tokensSold')
                // const etherValue = Web3.utils.fromWei(String(investmentRecords.quantity), 'ether')
                // dispatch(totalTokenSold(etherValue))

                // toast.success('You have succesfully purchased AGOD TOKEN')
            }
        } catch (err) {
            toast.error(err.message)

        }
        // }

    };
};

export const TOTAL_TOKEN_SOLD_DATA = "TOTAL_TOKEN_SOLD_DATA";
export const totalTokenSoldData = (tokens) => {
    console.log(tokens)
    return ({
        type: 'TOTAL_TOKEN_SOLD_DATA',
        payload: tokens,
    })
};


export const switchNetwork = (window) => {
    return async (dispatch) => {
        let currentProvider = getCurrentProvider(window);
        let web3Provider = web3WithProvider(window)
        const web3 = new Web3(web3Provider);
        try {
            await currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: web3.utils.toHex(250) }],
            });
            // props.onHide()
            dispatch(
                checkUSDTBal(window)
            );
            dispatch(
                checkUSDCBal(window)
            )
        } catch (err) {
            // const polygonChain = {
            //     chainName: "Mumbai Testnet",
            //     chainSymbol: 'MATIC',
            //     chainDecimals: 18,
            //     chainId: 80001,
            //     rpcUrl: 'https://rpc-mumbai.maticvigil.com/'
            // }
            // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
                console.log(web3.utils.toHex('250'), 'networkNotMAtched')
                await currentProvider.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        // :null
                        // polygonChain.chainName:null
                        // polygonChain.chainDecimals:null
                        // polygonChain.chainSymbol:null
                        // polygonChain.rpcUrl:null
                        {
                            chainName: 'Fantom',
                            chainId: web3.utils.toHex('250'),
                            nativeCurrency: {
                                name: 'Fantom',
                                decimals: 18,
                                symbol: 'FTM',
                            },
                            rpcUrls: ['https://rpc.ftm.tools'],
                        }
                    ],
                });
                dispatch(
                    checkUSDTBal(window)
                );
                dispatch(
                    checkUSDCBal(window)
                )
                dispatch(totalTokenSold(window))
                // props.onHide()

            }
        }

    }
}



// Get NFTs On Sell",
export const GetcheckStripePayment = (window) => {
    return async (dispatch) => {
        var axios = require('axios');

        var config = {
            method: 'post',
            url: '/GetcheckStripePayment',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        axios(config)
            .then(function (response) {
                console.log(response.data, 'GetcheckStripePayment');
              
                dispatch(GetcheckStripePaymentData(response.data.total))

            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const GET_CHECK_STRIPE_DATA = "GET_CHECK_STRIPE_DATA";
export const GetcheckStripePaymentData = (tokens) => {
    console.log(tokens)
    return ({
        type: 'GET_CHECK_STRIPE_DATA',
        payload: tokens * 2,
    })
};
