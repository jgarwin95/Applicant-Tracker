import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import Navigation from "./Navigation";

interface Props {}
const ListingPage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container maxWidth="md" sx={{ height: "100vh" }}>
        <Paper sx={{ height: "100%", margin: "10px", padding: "20px" }}>
          {children}
        </Paper>
      </Container>
    </>
  );
};

export default ListingPage;
