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
        <div className="">
        
        <Card
      className="mt-24 border-black shadow pb-10"
      sx={{    
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "5px 7px 10px rgba(0,0,0,0.2)",
        backdropFilter: "blur(5px)",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.8);",
        flexGrow: 1,
        maxWidth: "1500px",
      }}
    >
        <div className="flex flex-row gap-2 mt-10">
            <img
          src={props.image}
          alt="item"
          className="min-w-[220px] h-96 object-contain w-0"
          style={{
            filter:
              "drop-shadow(-5px -5px 0px #8e44ad) drop-shadow(5px 5px 0px #f23927) drop-shadow(10px 10px 5px #8e44ad44)",
            flexGrow: 1,
          }}
        />
                <div className="flex flex-col content-between mr-14">
                <Typography variant="h3" className="text-left pb-8">
                    {props.name} #000{props.id}
                </Typography>
                <div className="flex flex-row justify-between">
                         <p className="max-w-xl text-left text-2xl pr-6">
                        {props.description}
                        </p>
                   
                    <div className="flex flex-col w-[400px]">
                        <div className="bg-red-700 rounded text-white p-4 ml-10">
                            <p className="text-3xl p-2 font-black">Warning!</p>
                            <p>There are two variants of this item. The meta-buy button is for buying the item only for "TH3 HUB". If you press the normal buy button, you will get the item in "TH3 HUB", but also the item will be delivered to your home.</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-row justify-evenly items-center mt-10 ">
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
                

                
            </div>

        </div>
        </Card>
        </div>
    );
};


export default ItemDetailCard;