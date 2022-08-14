import Container from "@mui/material/Container";
import React from "react";
import Navigation from "./Navigation";

const ListingPage: React.FC = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{ width: "100%", height: "100%" }}
    >
      <Navigation />
      <Container
        maxWidth="md"
        disableGutters={true}
        sx={{ height: "100px", border: 1 }}
      >
        {children}
      </Container>
    </Container>
  );
};

export default ListingPage;
