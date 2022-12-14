import React, { useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";

import Page from "./page";
import ActionButton from "src/components/buttons/actionbutton";


const LandingPage = () => {
  return (
    <Page background="url(/hereticsback.png)">
      <div className="w-full relative justify-center items-center">
        <Card
          className="w-[600px] px-9 py-16 mt-56"
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "5px 7px 10px rgba(0,0,0,0.2)",
            backdropFilter: "blur(5px)",
            borderRadius: "10px",
            backgroundColor: "rgba(255,255,255,0.6);",
          }}
        >
          <div className="flex flex-col justify-between gap-5">
            <Typography variant="h3" style={{ fontSize: '16px' }}>
              WELCOME TO
            </Typography>
            <img
              src="/THH_black.png"
              alt="logo"
              className="h-48 sm:h-36 min-[320px]:h-24 object-contain"
            />
          </div>
          <ActionButton url="http://localhost:3000/marketplace" style={{marginTop: '20px'}}>Start Exploring!</ActionButton> 
        </Card>
      </div>
    </Page>
  );
};

export default LandingPage;
