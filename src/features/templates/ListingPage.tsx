import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Navigation from "./Navigation";

interface Props {}
const ListingPage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "red", height: "100vh" }} />
      </Container>
    </>
  );
};

export default ListingPage;
