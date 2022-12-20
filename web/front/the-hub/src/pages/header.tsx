import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const AppHeader = () => {

  return (
    <header
      className={`sticky h-[70px] top-0 z-50 w-full flex  items-center justify-between gap-5 bg-black px-4 py-3 md:px-8 lg:px-24 xl:px-48`}
    >
      <a href="/home" className="mr-5">
          <img src="/THH_white.png" alt="logo" className="h-8" />
      </a>

      <a href="/download">
            <Typography color={"white"}> DOWNLOAD </Typography>
      </a>

      <a href="/marketplace">
            <Typography  color={"white"}> MARKETPLACE </Typography>
      </a>

      <a href="/items">
            <Typography  color={"white"}> MY ITEMS </Typography>
      </a>

      <a href="/faqs">
            <Typography color={"white"}> FAQS </Typography>
      </a>

      <a href="/profile" className="ml-5">
          <img src="/THH_white.png" alt="logo" className="h-8" />
      </a>
    </header>
  );
};

export default AppHeader;