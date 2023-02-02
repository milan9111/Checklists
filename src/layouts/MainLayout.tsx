import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ContainerApp, WrapperApp } from "../styled/Wrappers";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ContainerApp maxWidth="xl">
        <WrapperApp component="main">{children}</WrapperApp>
      </ContainerApp>
    </>
  );
};

export default MainLayout;
