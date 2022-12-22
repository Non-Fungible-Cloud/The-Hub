import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ItemDetailCard from "src/components/card/itemDetailCard";
import Page from "./page";

const MarketplaceItemPage = () => {
  //TODO: CALL BLOCKCHAIN TO
  //GET DETAILS FROM THE ASSET AND SEND IT INTO THE DETAIL CARD
  const [item, setItem] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const idNumber = Number(useParams().id);

  useEffect(() => {
    //Blockchain Connection
    setItem({
      name: "Test",
      id: 1,
      image: "/clothing/trousers.png",
      description: "With this trousers, you can show off your style in-game",
      price: 1,
    });
    setIsLoading(false);
  }, []);

  return (
    <Page background="url(/hereticsback.png)">
      <div className="h-full w-full flex justify-center items-center">
        {!isLoading && (
          <ItemDetailCard
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          ></ItemDetailCard>
        )}
      </div>
    </Page>
  );
};

export default MarketplaceItemPage;
