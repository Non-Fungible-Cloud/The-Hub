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
      className="mt-24 pl-20 pr-10 py-9 border-2 border-black shadow"
      sx={{
        border: "solid 1px #222",
        boxShadow: "5px 7px 10px rgba(0,0,0,0.2)",
        backdropFilter: "blur(5px)",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.8);",
        flexGrow: 1,
        maxWidth: "1000px",
      }}
    >
      <div className="flex flex-row justify-between gap-5 flex-wrap">
        <img
          src={props.image}
          alt="item"
          className="min-w-[220px] h-96 object-contain w-0"
          style={{
            filter:
              "drop-shadow(-5px -5px 0px #8e44ad) drop-shadow(5px 5px 0px #f23927) drop-shadow(10px 10px 5px #8e44ad44)",
            flexGrow: 1,
          }}
        />
        <div className="flex flex-col justify-center content-between items-start bg-[#fffc] px-10 py-5 rounded">
          <Typography variant="h3">{props.name}</Typography>
          <Typography
            fontSize="16px"
            marginTop="10px"
            className="max-w-md text-left"
          >
            {props.description}
          </Typography>
          <div className="flex flex-row justify-evenly items-center gap-6 mt-20">
            <ActionButton>Buy now</ActionButton>
            <Typography> {props.price} ETH </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ItemDetailCard;
