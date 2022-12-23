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
        if(idNumber === 1){
            setItem({name: "Heretics Jersey", id: 1, image: "/clothing/jersey.png", price:"0.05", description: "Show your support for your favorite team with this Heretics technical Pro Kit! Made from a soft and breathable material, this t-shirt will keep you comfortable during all your  games. The fitted cut and modern design will allow you to move freely and in style. Show your loyalty to the team with the distinctive Heretics logo and colors on the front and back. Give your avatar a new look with this Heretics Jersey!"});
            setIsLoading(false);
        } else if(idNumber === 2){
            setItem({name: "Heretics Sweatshirt", id: 2, image: "/clothing/sweatshirt.png", price:"0.05", description: "Stay warm and show your team spirit with this Heretics sweatshirt. Made from a soft and cozy cotton blend, this sweatshirt will keep you comfortable all day long. The classic fit and ribbed cuffs and hem provide a timeless look, while the embroidered Heretics logo and team colors on the chest add a touch of team pride. Whether you're cheering on the team at the game or just lounging at home, the Heretics sweatshirt is the perfect choice. Show it off at Th3 Heretics Hub!"});
            setIsLoading(false);
        } else {
            setItem({name: "Heretics Sweatpants", id: 3, image: "/clothing/sweatpants.png", price:"0.05", description: "Stay comfortable and stylish with these Heretics sweatpants. Made from a soft polyester and spandex fabric, these pants will provide you with the comfort and freedom of movement you need during workouts or leisure time. They also feature an elastic waistband and adjustable drawstrings for a perfect fit. Show your support for the team with the distinctive Heretics logo and colors. The Heretics sweatpants are the perfect choice for any team fan!"});
            setIsLoading(false);
        }
    }, []);



    return(
        <Page background="url(/hereticsback.png)">
            <div className="w-full relative">
                        {!isLoading && (
                        <ItemDetailCard id={item.id} image={item.image} name={item.name} description={item.description} price={item.price}></ItemDetailCard>           
                        )}
            </div>
        </Page>
    );

};


export default MarketplaceItemPage;