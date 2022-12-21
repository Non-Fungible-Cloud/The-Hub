import React from "react";
import { Button, Card, Typography } from "@mui/material";

const ItemDetailCard = (props: {
    name?: string;
    id?: number;
    image?: string;
    description?: string;
    price?: number;
}) => {
    return(
        <Card className="w-[1400px] h-[650px] mt-24 p-9 border-2 border-black shadow" sx={{ boxShadow: '5px 7px 10px rgba(0,0,0,0.6)', borderRadius:'15px', backgroundColor: "rgba(255,255,255,0.6);"}}>
            <div className="flex flex-row justify-between gap-5">
                <img src={props.image} alt="item" className=""/>
                <div className="flex flex-col justify-evenly content-between mr-28">
                    <Typography variant="h3">
                        {props.name} 
                    </Typography>
                    <Typography variant="h6" className="max-w-md">
                        {props.description}
                    </Typography>
                    <div className="flex flex-row justify-evenly items-center mt-6">
                        <Button className="h-10 w-[180px]" style={{
                            backgroundImage: 'linear-gradient(45deg, #e74c3c, #8e44ad, #f1c40f)', color:'black', 
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', cursor: 'pointer', 
                            transition: '0.4s', backgroundSize: '200%',}}> 
                        BUY! </Button>     
                        <Typography> {props.price} ETH </Typography>    
                    </div>
                    
                </div>
                
            </div>
                    
                </Card>
    );
};


export default ItemDetailCard;