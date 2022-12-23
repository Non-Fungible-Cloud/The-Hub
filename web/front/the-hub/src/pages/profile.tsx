import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemCard from "src/components/card/itemCard";
import ItemCard2 from "src/components/card/itemCard2";

import { PageLoged } from "./index";

import { isNFTOwner0, isNFTOwner1, isNFTOwner2 } from "src/wallet/contractsCall";
 
const ProfilePage = () => {

    const [itemList, setItem] = useState<any[]>();
    const [isLoading, setIsLoading] = useState(true);


    //create an useeffect that checks if the user owns the nft with the function isnftowner0, if it does, then it will add the item to the list of items that the user owns
    //then it will check if the user owns the nft with the function isnftowner1, if it does, then it will add the item to the list of items that the user owns
    //then it will check if the user owns the nft with the function isnftowner2, if it does, then it will add the item to the list of items that the user owns
    //then it will render the items in the page

    useEffect(() => {
        if (isLoading == false) {
            return;
        } else {
        isNFTOwner0().then((result:any) => {
            if (result == true) {
                console.log(result);
                let item = {name:"Heretics Jersey", image:"/clothing/jersey.png", id:1}
                let items = [item];
                setItem(items);
            }
            isNFTOwner1().then((res:any) => {
                if (res == true) {
                    console.log(res);
                    let items = itemList;
                    items.push(itemList);
                    let item = {name:"Sweatshirt", image:"/clothing/sweatshirt.png", id:2}
                    items.push(item);
                    setItem(items);
                }
                isNFTOwner2().then((r:any) => {
                    if (r == true) {
                        console.log(result);
                        let items:any[] = itemList;
                        items.push(itemList);
                        let item = {name:"Sweatpants", image:"/clothing/swatpants.png", id:3}
                        items.push(item);
                        setItem(items);
                        setIsLoading(false);
                    }
                }
                );
            }
            );
        }
        );
        console.log(itemList); 
        
    }
    }, []);


    //TODO: RETRIEVE ITEMS FROM SMART CONTRACT
    //THERE'S A ITEM FROM EACH SC, SO WE NEED TO RETRIEVE THEM ALL
    //AND THEN RENDER THEM IN THE PAGE
    //CALLING ITEMCARD COMPONENT FOR EACH ITEM

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
            <div className="mt-12">           
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


export default ProfilePage;
 