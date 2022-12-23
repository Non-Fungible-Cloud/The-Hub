import { Card, CardActionArea, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './cssCard.scss';



const ItemCard2 = (props: {
    name?: string;
    id?: number;
    image?: string;
    asset?: string;
}) => {

const [isLoading, setIsLoading] = useState(true);
const [name, setName] = useState(props.name);
const [url, setUrl] = useState<string>();




useEffect(() => {
    //check if name contains heretics, if so save name without 'heretics' and set isLoading to false
    if(props.name?.toLowerCase().includes("heretics")){
        setName(props.name?.toLowerCase().replace("heretics", ""));
        
    } 
    if(props.asset != undefined){
        setUrl(`https://testnets.opensea.io/assets/bsc-testnet/${props.asset}/1`);
    }else {
       setUrl(`http://localhost:3000/marketplace/${props.id}`);
    }
    setIsLoading(false); 
    
    }, []
);

return(
    <>
    {!isLoading && (
    <div className="m-10">
        <div className="canvas-wrapper">
        <a href={url} className="canvas">
            <div className="canvas_border">
                <svg>
                    <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor:'rgb(253,137,68)', stopOpacity:1}}></stop><stop offset="100%" style={{stopColor:'rgb(153,75,23)', stopOpacity:1}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                    <rect id="rect-grad" className="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
            </div>
            <div className="canvas_img-wrapper">
                <img className="canvas_img" src={props.image}/>
            </div>
            <div className="canvas_copy canvas_copy--left">
                <span className="canvas_copy_subtitle">#000{props.id}</span>
                <Typography  className="canvas_copy_title" variant='h4' color={"black"}> {name} </Typography>
                <span className="canvas_copy_details">The best apparel to your web3 identity</span>
            </div>
        </a>
        </div>
    </div>
    )}
    </>
);
};


export default ItemCard2;