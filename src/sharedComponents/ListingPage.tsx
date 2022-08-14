import Container from "@mui/material/Container";
import React from "react";
import Navigation from "./Navigation";

type ListingPageProps = {
  header?: JSX.Element;
};

const ListingPage: React.FC<ListingPageProps> = ({ header, children }) => {
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{ width: "100%", height: "100%" }}
    >
      <Navigation />
      {header}
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
