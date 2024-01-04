const AGOD_ABI = [{
    "inputs": [{
        "internalType": "contract IERC20",
        "name": "_token",
        "type": "address"
    },
    {
        "internalType": "contract IERC20",
        "name": "_firstPeggedToken",
        "type": "address"
    },
    {
        "internalType": "contract IERC20",
        "name": "_secondPeggedToken",
        "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
},
{
    "inputs": [{
        "internalType": "uint256",
        "name": "peggedTokenAmount",
        "type": "uint256"
    },
    {
        "internalType": "address",
        "name": "referalAddress",
        "type": "address"
    },
    {
        "internalType": "bool",
        "name": "peggedBool",
        "type": "bool"
    }],
    "name": "buy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "end",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "endSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "endTime",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "investmentRecords",
    "outputs": [{
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "monthlyRelease",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "referalEarnings",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "referalEndtime",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "release",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "start",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "tokensSold",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address[]",
        "name": "investorsAddresses",
        "type": "address[]"
    }],
    "name": "whitelistInvestor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}]

module.exports = AGOD_ABI;