import { Typography } from "@mui/material";
import React from "react";
import ItemCard from "src/components/card/itemCard";
import ItemCard2 from "src/components/card/itemCard2";

import { PageLoged, Page } from "./index";


 
const MarketplacePage = () => {

    return (    
        <PageLoged>
            <div className="">
                <Typography className="" variant={'h4'}>Clothing</Typography>    
                <div className="mt-6 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 items-center justify-center">
                    <ItemCard2 name="Heretics Jersey" image="/clothing/jersey.png" id={1}></ItemCard2>
                    <ItemCard2 name="Sweatshirt" image="/clothing/sweatshirt.png"  id={2}></ItemCard2>
                    <ItemCard2 name="Sweatpants" image="/clothing/sweatpants.png"  id={3}></ItemCard2>
                    <ItemCard2 name="T-shirt" image="/clothing/shirt.jpg"  id={4}></ItemCard2>
                </div>    
            </div>
            <div className="mt-20">           
                <Typography className="p-0" variant={'h4'}>Accessories</Typography>    
                <div className="mt-6 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 items-center justify-center">
                    <ItemCard2 name="Super Pack" image="/clothing/super-pack.jpg"  id={5}></ItemCard2>
                    <ItemCard2 name="Scarf" image="/clothing/scarf.jpg "  id={6}></ItemCard2>
                    <ItemCard2 name="Winter Hat" image="/clothing/hat.jpg"  id={7}></ItemCard2>
                    <ItemCard2 name="Bag" image="/clothing/bag.png"  id={8}></ItemCard2>
                </div>  
            </div>
        </PageLoged>

    )
};


export default MarketplacePage;
 