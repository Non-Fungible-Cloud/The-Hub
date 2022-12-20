import { Card, Typography } from "@mui/material";
import React from "react";



const ItemCard = (props: {
    name?: string;
    id?: number;
    image?: string;
}) => {


return(
    <Card className="w-64 ">
        <div className="flex flex-col">
            <img className="mb-[-100px]" src={props.image}></img>
            <div className="flex flex-col items-start bg-[rgba(0,0,0,0.75)] p-3">
                <Typography variant='h6' color={"white"}> #{props.id} </Typography>
                <Typography variant='h6' color={"white"}> {props.name} </Typography>
            </div>
        </div>
        



    </Card>
);
};


export default ItemCard;