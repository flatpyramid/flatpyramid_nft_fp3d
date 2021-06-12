export class AppSettings {

  public static ethtoken='0xE0166F81b0E9303Bb5f4f25613d284862f3E5801';
	public static ethpresale='0x134e69610bcab571888A73f4cA7B37d6Bfcc614d';
	public static bnbtoken='0xC4d814C6989053BaF17e9eEDe6C3cBa1F45ee2A6';
	public static bnbpresale='0xe1795d65B8CfD4Bf8141A23FF4AE300dc642E2cb';
  public static presale_Abi=[
			{
				"constant": true,
				"inputs": [],
				"name": "hasClosed",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "rate",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "weiRaised",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "isOpen",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "closingTime",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "wallet",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [],
				"name": "renounceOwnership",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "isOwner",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "newClosingTime",
						"type": "uint256"
					}
				],
				"name": "extendTime",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "openingTime",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "remainingTokens",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "tokenWallet",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "beneficiary",
						"type": "address"
					}
				],
				"name": "buyTokens",
				"outputs": [],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "token",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "FP3D",
						"type": "address"
					},
					{
						"name": "wallet",
						"type": "address"
					},
					{
						"name": "tokenWallet",
						"type": "address"
					},
					{
						"name": "rate",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"payable": true,
				"stateMutability": "payable",
				"type": "fallback"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "purchaser",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "beneficiary",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "TokensPurchased",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "prevClosingTime",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "newClosingTime",
						"type": "uint256"
					}
				],
				"name": "TimedCrowdsaleExtended",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			}
		
	
	]
	

 }
