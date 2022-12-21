import { Box } from "@mui/material";
import { ethers } from "ethers";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "./header";

const PageLoged = (props: { children?: React.ReactNode }) => {

  const navigate = useNavigate();

  useEffect(() => {
    const connect = () => {
        //@ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        provider
            .send("eth_requestAccounts", [])
            .then((r:any) => {
                console.log(r);
                console.log("Connect success");
                console.log("Retrieving Data from user");
        })
        .catch((e:any) => {
          console.log(e); 
          console.log("Error connecting to metamask");
        });
    };

    connect();
  }, []);

  return (
    <>
      <AppHeader />
      <section className="block w-full py-5 px-16 md:px-8 lg:px-24 xl:px-48 mui:left-[250px] mui:w-[calc(100%-250px)] absolute flex flex-col items-center bg-[#f6f6f6]">
        <Box className="w-full max-w-7xl mt-10 pb-[350px] min-h-[calc(100vh-100px)]">{props.children}</Box>
      </section>
    </>
  );
};

export default PageLoged;