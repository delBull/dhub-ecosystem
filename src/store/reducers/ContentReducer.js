import { GET_CONTENT_LOADER } from "../actions/Content";
import { BALANCE_METAMASK, BALANCE_OF_DATA, BUY_AGOD_LOADER, CHECK_USDC_BALANCE, CHECK_USDT_BALANCE, CREATE_CUSTOMER_LOADER, CREATE_PAYMENT, CREATE_PAYMENT_METHOD, GET_CHECK_STRIPE_DATA, GET_META_MASK_DATA, GET_USER_LOADER, INVESTMENT_AMOUNT, TOTAL_TOKEN_SOLD_DATA } from "../actions/user/user";

const initialState = {
    content: false,
    metaMaskAccount: false,
    connectionType: false,
    customerLoader: false,
    paymentMethodLoader: false,
    paymentLoader: false,
    balance: 0,
    investAmount: 0,
    buyAgodLoader: false,
    balanceOf: false,
    getUserLoader: false,
    getTotalTokensSold: 0,
    getUSDTBalance: 0,
    getUSDCBalance: 0,
    totalTokenSoldCard: 0

};

const ContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT_LOADER:
            return {
                ...state,
                content: action.payload,
            };
        case GET_META_MASK_DATA:
            return {
                ...state,
                metaMaskAccount: action.payload.AgodTokenId,
                connectionType: action.payload.connectionType
            };
        case CREATE_CUSTOMER_LOADER:
            return {
                ...state,
                customerLoader: action.payload
            };
        case CREATE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethodLoader: action.payload
            };
        case CREATE_PAYMENT:
            return {
                ...state,
                paymentLoader: action.payload
            };
        case BALANCE_METAMASK:
            return {
                ...state,
                balance: action.payload
            };
        case INVESTMENT_AMOUNT:
            return {
                ...state,
                investAmount: action.payload
            };
        case BUY_AGOD_LOADER:
            return {
                ...state,
                buyAgodLoader: action.payload
            };
        case BALANCE_OF_DATA:
            return {
                ...state,
                balanceOf: action.payload
            };
        case GET_USER_LOADER:
            return {
                ...state,
                getUserLoader: action.payload
            };
        case TOTAL_TOKEN_SOLD_DATA:
            console.log(action.payload)
            return {
                ...state,
                getTotalTokensSold: action.payload
            };
        case CHECK_USDT_BALANCE:
            console.log(action.payload)
            return {
                ...state,
                getUSDTBalance: action.payload
            };
        case CHECK_USDC_BALANCE:
            console.log(action.payload)
            return {
                ...state,
                getUSDCBalance: action.payload
            };
        case GET_CHECK_STRIPE_DATA:
            console.log(action.payload)
            return {
                ...state,
                totalTokenSoldCard: action.payload
            };

        default:
            return {
                ...state
            }

    }
}
export default ContentReducer