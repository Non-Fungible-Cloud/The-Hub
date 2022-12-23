import { ethers } from "ethers";

const abi0 = require("./abi0.json");
const abi1 = require("./abi0.json");
const abi2 = require("./abi0.json");


const jerseyContract = "0xB4B650A151c52Ad4BAafa0F46fd13637B02F4C94";
const sweatshirtContract = "0x47453D766578d48586EB98Eb127364939BA3aE15";
const sweatpantsContract = "0x8c7126cfBA2C66160a232470D986748605300ec1";


//@ts-ignore
const provider = new ethers.providers.Web3Provider(window.ethereum);

const contract0 = new ethers.Contract(
    jerseyContract,
    abi0,
    provider.getSigner()
);

const contract1 = new ethers.Contract(
    sweatshirtContract,
    abi1,
    provider.getSigner()
);

const contract2 = new ethers.Contract(
    sweatpantsContract,
    abi2,
    provider.getSigner()
);


export async function mintJersey(id: number, amount: number) {
    if(id == 1){
        return await contract0.mint(id, amount, {value: ethers.utils.parseEther("0.01")});
    } else {
        console.log("Requesting 0.05 ETH");
        return await contract0.mint(id, amount, {value: ethers.utils.parseEther("0.05")});
    }
}

export async function mintSweatshirt(id: number, amount: number) {
    if(id == 1){
        return await contract1.mint(id, amount, {value: ethers.utils.parseEther("0.01")});
    } else {
        console.log("Requesting 0.05 ETH");
        return await contract1.mint(id, amount, {value: ethers.utils.parseEther("0.05")});
    }
}   

export async function mintSweatpants(id: number, amount: number) {
    if(id == 1){
        return await contract2.mint(id, amount, {value: ethers.utils.parseEther("0.01")});
    } else {
        console.log("Requesting 0.05 ETH");
        return await contract2.mint(id, amount, {value: ethers.utils.parseEther("0.05")});
    }
}


export async function isNFTOwner0(){
    return await contract0.isNFTOwner();
}

export async function isNFTOwner1(){
    return await contract1.isNFTOwner();
}

export async function isNFTOwner2(){
    return await contract2.isNFTOwner();
}