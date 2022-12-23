import React from "react";
import { Box, Typography } from "@mui/material";
//import AppFooter from "./footer";
import AppHeader from "./header";

const Page = (props: {
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  background?: string;
}) => {

  return (
    <div className="">
    <AppHeader />
    {props.background && (
    <div className="bg-cover bg-center bg-no-repeat fix" style={{backgroundImage: `${props.background}`}}>          
          <Box className="flex items-center justify-between md:flex-row">
            {props.title && <Typography variant="h1">{props.title}</Typography>}
            {props.actions && (
              <div className="flex flex-col gap-2 md:flex-row md:justify-end">
                {props.actions}
              </div>
            )}
          </Box>
          <Box className="mt-14 mx-48 pb-[350px] h-[calc(100vh-40px)] w-min-max md:mx-10 md:mt-[-60px] sm:mx-10 min-[320px]:mx-6">
            {props.children}
          </Box>
          {/*  <AppFooter /> */}    
      <div/>
      </div>)}
    </div>
  );
};

export default Page;