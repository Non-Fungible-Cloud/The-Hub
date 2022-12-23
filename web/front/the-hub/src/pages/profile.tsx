import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemCard from "src/components/card/itemCard";
import ItemCard2 from "src/components/card/itemCard2";

import { PageLoged } from "./index";

import { isNFTOwner0, isNFTOwner1, isNFTOwner2 } from "src/wallet/contractsCall";
import ActionButton from "src/components/buttons/actionbutton";
 
const ProfilePage = () => {

    const [itemList, setItem] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    //create an useeffect that checks if the user owns the nft with the function isnftowner0, if it does, then it will add the item to the list of items that the user owns
    //then it will check if the user owns the nft with the function isnftowner1, if it does, then it will add the item to the list of items that the user owns
    //then it will check if the user owns the nft with the function isnftowner2, if it does, then it will add the item to the list of items that the user owns
    //then it will render the items in the page

    useEffect(() => {
        if (isLoading == false) {
            return;
        } else {
        var itemsList: any[] = [];
        isNFTOwner0().then((result:any) => {
            if (result == true) {
                console.log(result);
                let item = {name:"Heretics Jersey", image:"/clothing/jersey.png", id:1}
                itemsList.push(item);
            }
            isNFTOwner1().then((res:any) => {
                if (res == true) {
                    console.log(res);
                    let item2 = {name:"Sweatshirt", image:"/clothing/sweatshirt.png", id:2}
                    itemsList.push(item2);
                }
                isNFTOwner2().then((r:any) => {
                    if (r == true) {
                        console.log(result);
                        let item = {name:"Sweatpants", image:"/clothing/sweatpants.png", id:3}
                        itemsList.push(item);
                        
                    }
                    setItem(itemsList);
                    console.log("itemlist")
                    console.log(itemsList);
                    setIsLoading(false);
                }
                );
            }
            );
        }
        );
        
        
    }
    }, []);


    //TODO: RETRIEVE ITEMS FROM SMART CONTRACT
    //THERE'S A ITEM FROM EACH SC, SO WE NEED TO RETRIEVE THEM ALL
    //AND THEN RENDER THEM IN THE PAGE
    //CALLING ITEMCARD COMPONENT FOR EACH ITEM

    return (    
        <PageLoged>
            <div className="">
                <Typography className="" variant={'h4'}>My Collectibles</Typography> 
            {isLoading ? (
                    <div  className="mt-12">
                        <Typography variant="h6">Retrieving data from the blockchain, please wait... </Typography>
                    </div>
                ) : (
                    itemList.length > 0 ? (
                            itemList.map((item) => (
                                <div className="mt-6 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 items-center justify-center">
                                    <ItemCard2 name={item.name} image={item.image} id={item.id}></ItemCard2>
                                </div>
                            ))
                    ) : (
                        <div  className="mt-12">
                            <Typography variant="h6"> You don't own any collectibles yet. </Typography>
                            <Typography variant="h6"> Check out the NFTs in our Markeplace! </Typography>
                            <ActionButton url="http://localhost:3000/marketplace" style={{marginTop: '20px'}}>Go to Markeplace</ActionButton> 
                        </div>
                    )
                )} 

            </div>
        </PageLoged>

    )
};


export default ProfilePage;
 