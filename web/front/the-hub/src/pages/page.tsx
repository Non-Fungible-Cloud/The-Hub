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
    <>
    <AppHeader />
    {props.background && (
    <div className="bg-cover bg-center bg-no-repeat fix" style={{backgroundImage: `url(/hereticsback.png)`}}>
      
      
           
          <Box className="flex items-center justify-between md:flex-row">
            {props.title && <Typography variant="h1">{props.title}</Typography>}
            {props.actions && (
              <div className="flex flex-col gap-2 md:flex-row md:justify-end">
                {props.actions}
              </div>
            )}
          </Box>
          <Box className="w-full max-w pb-[350px] min-h-[calc(100vh)]">
            {props.children}
          </Box>
{/*           <Box className="w-full max-w-7xl mt-10 pb-[350px] min-h-[calc(100vh-100px)]">{props.children}</Box>
 */}       {/*  <AppFooter /> */}    
      <div/>
      </div>)}
    </>
  );
};

export default Page;