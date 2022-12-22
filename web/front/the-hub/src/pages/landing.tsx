import React, { useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";

import Page from "./page";

//import Background from "public/background.png";

const LandingPage = () => {
  return (
    <Page background="url(/hereticsback.png)">
      <div className="h-full w-full flex justify-center items-center">
        <Card
          className="w-[600px] px-9 py-16"
          sx={{
            border: 'solid 1px #222',
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
          <Button
            className="h-10 w-[280px]"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #e74c3c, #8e44ad, #f1c40f)",
              color: "white",
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              cursor: "pointer",
              transition: "0.4s",
              backgroundSize: "200%",
              marginTop: "20px",
            }}
          >
            <span style={{ textShadow: "0 0 2px #0002" }}>
              Start Exploring!
            </span>{" "}
          </Button>
        </Card>
      </div>
    </Page>
  );
};

export default LandingPage;
