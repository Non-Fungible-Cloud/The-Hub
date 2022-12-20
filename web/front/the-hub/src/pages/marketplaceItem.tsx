import React, { useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";

import Page from "./page";
import ItemDetailCard from "src/components/card/itemDetailCard";


const MarketplaceItemPage = () => {

    //TODO: CALL BLOCKCHAIN TO 
    //GET DETAILS FROM THE ASSET AND SEND IT INTO THE DETAIL CARD

    return(
            <Page background="url(/hereticsback.png)">
                <div className="h-full w-full flex justify-center items-center">
                         <ItemDetailCard></ItemDetailCard>           
                </div>
                

            </Page>
    );

};


export default MarketplaceItemPage;