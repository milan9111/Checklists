import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { WrapperApp } from "../styled/Wrappers";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <WrapperApp component="div">{children}</WrapperApp>
      </Container>
    </>
  );
};

export default MainLayout;
