import React from "react";
import { Button, Card, Typography } from "@mui/material";
import { mintJersey, mintSweatpants, mintSweatshirt } from "src/wallet/contractsCall";

const ItemDetailCard = (props: {
    name?: string;
    id?: number;
    image?: string;
    description?: string;
    price?: number;
}) => {

    const metaBuy = () => {
        if (props.id == 1) {
            console.log("buying jersey");
            mintJersey(1, 1);
        } else if (props.id == 2) {    
            console.log("buying sweatshirt");
            mintSweatshirt(1,1);
        } else {
            console.log("buying sweatpants")
            mintSweatpants(1, 1);
        }
    }

    const buy = () => {
        if (props.id == 1) {
            console.log("buying jersey with delivery");
            mintJersey(2, 1);
        } else if (props.id == 2) {    
            console.log("buying sweatshirt with delivery");
            mintSweatshirt(2, 1);
        } else {
            console.log("buying sweatpants with delivery")
            mintSweatpants(2, 1);
        }
    }


    return (

        <div className="flex flex-row justify-between gap-10 mt-20">
            <img src={props.image} alt="item" className="bg-white rounded" />
            <div className="flex flex-col content-between mr-28">
                <Typography variant="h3" className="text-left pb-10">
                    {props.name} #000{props.id}
                </Typography>
                <p className="max-w-md text-left">
                    {props.description}
                </p>

                <div className="bg-red-700 rounded text-white mt-10 p-4">
                    <p className="text-3xl p-2 font-black">Warning!</p>
                    <p>There are two variants of this item. The meta-buy button is for buying the item only for "TH3 HUB". If you press the normal buy button, you will get the item in "TH3 HUB", but also the item will be delivered in your home.</p>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="flex flex-row justify-evenly items-center mt-6 ">
                        <Button onClick={()=> buy()} className="h-10 w-[180px]" style={{
                            backgroundImage: 'linear-gradient(45deg, #F2766B, #A6281C)', color: 'black',
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', cursor: 'pointer',
                            transition: '0.4s', backgroundSize: '200%',
                        }}>
                            BUY! </Button>
                        <Typography> {props.price} ETH </Typography>
                    </div>
                    <div className="flex flex-row justify-evenly items-center mt-6">
                        <Button onClick={()=> metaBuy()} className="h-10 w-[180px]" style={{
                            backgroundImage: 'linear-gradient(45deg, #F2766B, #A6281C)', color: 'black',
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', cursor: 'pointer',
                            transition: '0.4s', backgroundSize: '200%',
                        }}>
                            META-BUY! </Button>
                        <Typography> 0.01 ETH </Typography>
                    </div>
                </div>
            </div>

        </div>

    );
};


export default ItemDetailCard;