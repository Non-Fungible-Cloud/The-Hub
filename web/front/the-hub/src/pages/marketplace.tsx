import { Typography } from "@mui/material";
import React from "react";
import ItemCard from "src/components/card/itemCard";
import Page from "./page";


 
const MarketplacePage = () => {

    //TODO: RETRIEVE ITEMS FROM SMART CONTRACT
    //THERE'S A ITEM FROM EACH SC, SO WE NEED TO RETRIEVE THEM ALL
    //AND THEN RENDER THEM IN THE PAGE
    //CALLING ITEMCARD COMPONENT FOR EACH ITEM

    return (    
        <Page background="white">
            
            <div className="">
                <Typography className="" variant={'h4'}>Clothing</Typography>    
                <div className="mt-6 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 items-center justify-center">
                    <ItemCard name="Heretics Jersey" image="/clothing/tshirt.png"></ItemCard>
                    <ItemCard name="Trousers" image="/clothing/trousers.png"></ItemCard>
                    <ItemCard name="Sweatshirt" image="/clothing/sweatshirt.png"></ItemCard>
                    <ItemCard name="T-shirt" image="/clothing/shirt.jpg"></ItemCard>
                </div>    
            </div>
            
            
            <div className="mt-8">           
                <Typography className="p-0" variant={'h4'}>Accessories</Typography>    
                <div className="mt-6 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 items-center justify-center">
                    <ItemCard name="Super Pack" image="/clothing/super-pack.jpg"></ItemCard>
                    <ItemCard name="Scarf" image="/clothing/scarf.jpg"></ItemCard>
                    <ItemCard name="Winter Hat" image="/clothing/hat.jpg"></ItemCard>
                    <ItemCard name="Bag" image="/clothing/bag.png"></ItemCard>
                </div>  
            </div>
            
        
        </Page>

    )
};


export default MarketplacePage;
 