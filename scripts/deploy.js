// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
	const HelloWorldContract = await ethers.getContractFactory("HelloWorld");

	const deployedContract = await HelloWorldContract.deploy();

	await deployedContract.deployed();

	// print the address of the deployed contract
	console.log("HelloWorld address:", deployedContract.address);
}

// Call the main function and catch if there is any error
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
