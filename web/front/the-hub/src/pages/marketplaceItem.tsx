import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@mui/material";

import Page from "./page";
import ItemDetailCard from "src/components/card/itemDetailCard";
import { useParams } from "react-router-dom";


const MarketplaceItemPage = () => {

    //TODO: CALL BLOCKCHAIN TO 
    //GET DETAILS FROM THE ASSET AND SEND IT INTO THE DETAIL CARD
    const [item, setItem] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);


    const idNumber = Number(useParams().id);

    useEffect(() => {
        //Blockchain Connection
        setItem({name: "Test", id: 1, image: "/clothing/trousers.png", description: "Stay comfortable and stylish with these Heretics sweatpants. Made from a soft polyester and spandex fabric, these pants will provide you with the comfort and freedom of movement you need during workouts or leisure time. They also feature an elastic waistband and adjustable drawstrings for a perfect fit. Show your support for the team with the distinctive Heretics logo and colors. The Heretics sweatpants are the perfect choice for any team fan!", price: 1});
        setIsLoading(false);
    }, []);



    return(

            <Page background="white">
                <div className="h-full w-full flex justify-center items-center">
                         {!isLoading && (
                            <ItemDetailCard image={item.image} name={item.name} description={item.description} price={item.price}></ItemDetailCard>           
                         )}
                </div>
                

            </Page>
    );

};


export default MarketplaceItemPage;