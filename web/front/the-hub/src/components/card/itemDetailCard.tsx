import { Card, Typography } from "@mui/material";
import ActionButton from "src/components/buttons/actionbutton";

const ItemDetailCard = (props: {
  name?: string;
  id?: number;
  image?: string;
  description?: string;
  price?: number;
}) => {
  return (
    <Card
      className="w-[1400px] h-[650px] mt-24 p-9 border-2 border-black shadow"
      sx={{
        border: "solid 1px #222",
        boxShadow: "5px 7px 10px rgba(0,0,0,0.2)",
        backdropFilter: "blur(5px)",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.6);",
      }}
    >
      <div className="flex flex-row justify-between gap-5">
        <img
          src={props.image}
          alt="item"
          className=""
          style={{ filter: "drop-shadow(-5px -5px 0px #8e44ad) drop-shadow(5px 5px 0px #f23927) drop-shadow(10px 10px 5px #8e44ad44)" }}
        />
        <div className="flex flex-col justify-evenly content-between mr-28">
          <Typography variant="h3">{props.name}</Typography>
          <Typography variant="h6" className="max-w-md">
            {props.description}
          </Typography>
          <div className="flex flex-row justify-evenly items-center mt-6">
            <ActionButton>Buy now</ActionButton>
            <Typography> {props.price} ETH </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ItemDetailCard;
