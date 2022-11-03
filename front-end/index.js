const HelloWorldContract = "0x1053BF3ef80f4E307e5C55d51A091693B3515b17";
const HelloWorldContractABI = [
	{
		inputs: [],
		name: "getResponse",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "response",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_response",
				type: "string",
			},
		],
		name: "setResponse",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

let HWContract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
	provider.listAccounts().then((accounts) => {
		signer = provider.getSigner(accounts[0]);
		HWContract = new ethers.Contract(
			HelloWorldContract,
			HelloWorldContractABI,
			signer
		);
	});
});

async function getResponse() {
	const getResponsePromise = HWContract.getResponse();
	const response = await getResponsePromise;
	const quote = '"';
	window.alert("You said:" + " " + quote + response + quote);
	console.log(response);
}

async function setResponse() {
	const response = document.getElementById("response").value;
	const setResponsePromise = HWContract.setResponse(response);
	await setResponsePromise;
}
