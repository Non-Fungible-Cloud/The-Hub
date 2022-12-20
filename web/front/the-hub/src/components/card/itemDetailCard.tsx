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
        <Card className="w-[600px] h-76 p-9 border-2 border-black shadow" sx={{ boxShadow: '5px 7px 10px rgba(0,0,0,0.6)', borderRadius:'15px', backgroundColor: "rgba(255,255,255,0.6);"}}>
            <div className="flex flex-row justify-between gap-5">
                <img src="/THH_black.png" alt="logo" className="h-36 sm:h-28 min-[320px]:h-24" />
                <div className="flex flex-col justify-between">
                    <Typography variant="h3">
                    WELCOME 
                    </Typography>
                    <Typography variant="h3">
                        TO
                    </Typography>
                </div>
                
            </div>
                    <Button className="h-10 w-[280px]" style={{
                        backgroundImage: 'linear-gradient(45deg, #e74c3c, #8e44ad, #f1c40f)', color:'black', 
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', cursor: 'pointer', 
                        transition: '0.4s', backgroundSize: '200%', marginTop:'20px'}}> BUY! </Button>
                </Card>
    );
};


export default ItemDetailCard;